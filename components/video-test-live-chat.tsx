"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  addDoc,
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  type DocumentData,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

type LiveChatMessage = {
  id: string;
  text: string;
  senderId: string;
  senderName: string;
  createdAtMs: number;
};

function getOrCreateGuestIdentity() {
  const storageKey = "douyinclaim:livechat:guest";

  try {
    const existing = localStorage.getItem(storageKey);
    if (existing) {
      const parsed = JSON.parse(existing) as { id: string; name: string };
      if (parsed?.id && parsed?.name) return parsed;
    }

    const id = `guest_${Math.random().toString(36).slice(2, 10)}`;
    const name = `Guest-${Math.floor(1000 + Math.random() * 9000)}`;
    const created = { id, name };
    localStorage.setItem(storageKey, JSON.stringify(created));
    return created;
  } catch {
    // If localStorage is blocked, fallback to ephemeral identity
    return {
      id: `guest_${Math.random().toString(36).slice(2, 10)}`,
      name: `Guest-${Math.floor(1000 + Math.random() * 9000)}`,
    };
  }
}

function toLiveChatMessage(id: string, data: DocumentData): LiveChatMessage | null {
  const text = typeof data?.text === "string" ? data.text : "";
  const senderId = typeof data?.senderId === "string" ? data.senderId : "unknown";
  const senderName = typeof data?.senderName === "string" ? data.senderName : "Guest";
  const createdAtMs = typeof data?.createdAtMs === "number" ? data.createdAtMs : 0;

  if (!text) return null;

  return { id, text, senderId, senderName, createdAtMs };
}

export function VideoTestLiveChat() {
  const { t, language } = useLanguage();

  const [messages, setMessages] = useState<LiveChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const identity = useMemo(() => {
    if (typeof window === "undefined") return null;
    return getOrCreateGuestIdentity();
  }, []);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!db) {
      setError("Firebase is not configured (missing NEXT_PUBLIC_FIREBASE_* env vars).");
      return;
    }

    // Collection path: liveChats/video-test/messages
    const messagesRef = collection(db, "liveChats", "video-test", "messages");
    const q = query(messagesRef, orderBy("createdAtMs", "asc"), limit(200));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const next: LiveChatMessage[] = [];
        snapshot.forEach((doc) => {
          const msg = toLiveChatMessage(doc.id, doc.data());
          if (msg) next.push(msg);
        });
        setMessages(next);
        setError(null);
      },
      (err) => {
        setError(err?.message || "Failed to load messages");
      },
    );

    return unsubscribe;
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages.length]);

  const handleSendMessage = async () => {
    const text = inputMessage.trim();
    if (!text || sending) return;

    if (!db) {
      setError("Firebase is not configured (missing NEXT_PUBLIC_FIREBASE_* env vars).");
      return;
    }
    if (!identity) return;

    setSending(true);
    setError(null);

    try {
      const messagesRef = collection(db, "liveChats", "video-test", "messages");
      await addDoc(messagesRef, {
        text,
        senderId: identity.id,
        senderName: identity.name,
        createdAtMs: Date.now(),
        createdAt: serverTimestamp(),
      });
      setInputMessage("");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to send";
      setError(message);
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Chat Messages */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {/* Local (non-persisted) system message */}
          <div className="flex justify-center">
            <span className="text-xs text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
              {t("welcomeMessage")}
            </span>
          </div>

          {messages.map((message) => {
            const isMe = identity?.id && message.senderId === identity.id;
            return (
              <div key={message.id} className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[80%] ${isMe ? "bg-primary text-primary-foreground" : "bg-muted"} rounded-2xl px-4 py-2`}>
                  <p className="text-xs font-semibold mb-1 opacity-70">{message.senderName}</p>
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-50 mt-1 text-right">
                    {new Date(message.createdAtMs).toLocaleTimeString(
                      language === "zh" ? "zh-CN" : "en-US",
                      { hour: "2-digit", minute: "2-digit" },
                    )}
                  </p>
                </div>
              </div>
            );
          })}

          {error ? (
            <div className="text-center text-xs text-destructive bg-destructive/10 px-3 py-2 rounded">
              {error}
            </div>
          ) : null}

          <div ref={bottomRef} />
        </div>
      </ScrollArea>

      {/* Chat Input */}
      <div className="p-4 border-t border-border">
        <div className="flex gap-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
            placeholder={t("typeMessage")}
            className="flex-1 bg-background"
            disabled={!db || !identity || sending}
          />
          <Button
            onClick={handleSendMessage}
            size="icon"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            disabled={!db || !identity || sending || !inputMessage.trim()}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </Button>
        </div>
      </div>
    </>
  );
}
