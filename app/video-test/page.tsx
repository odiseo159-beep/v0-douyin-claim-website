'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'system';
  timestamp: Date;
}

export default function VideoTest() {
  const { t, language } = useLanguage();
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: t('welcomeMessage'),
      sender: 'system',
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    // Simulate system response
    setTimeout(() => {
      const systemResponse: Message = {
        id: messages.length + 2,
        text: t('systemResponse'),
        sender: 'system',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, systemResponse]);
    }, 1000);
  };

  return (
    <div className="bg-background text-foreground min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/douyinclaimlogo.png" 
            alt={t('brandName')} 
            width={48} 
            height={48}
            className="w-12 h-12"
          />
          <span className="text-2xl font-bold">{t('brandName')}</span>
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden md:inline-flex" asChild>
            <Link href="/how-it-works">{t('howItWorks')}</Link>
          </Button>
          <LanguageSwitcher />
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
            <Link href="/">{t('backToHome')}</Link>
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">{t('videoTestTitle')}</h1>
          <p className="text-muted-foreground">
            {t('videoTestDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Video Section */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-xl overflow-hidden">
              {/* Video Player */}
              <div className="relative aspect-[9/16] max-h-[600px] bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <video
                  className="w-full h-full object-contain"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Newscale-g720MAr05O9rIzHILq3xLcxVQK0Gf3.mp4"
                >
                  {language === 'zh' ? '你的浏览器不支持视频元素。' : 'Your browser does not support the video element.'}
                </video>

                {/* Verification Badge */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-background/90 backdrop-blur-sm border border-primary/50 rounded-full px-4 py-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-semibold text-primary">{t('verifiedByFlap')}</span>
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6 border-t border-border">
                <h2 className="text-xl font-semibold mb-2">{t('videoTestInfo')}</h2>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {t('videoTestInfoDescription')}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                    #DouyinClaim
                  </span>
                  <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full border border-accent/20">
                    #FlapNetwork
                  </span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary text-xs rounded-full border border-secondary/20">
                    #Blockchain
                  </span>
                </div>
                <Button 
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90" 
                  asChild
                >
                  <a href="https://v.douyin.com/kOXK3sZ3mwk/" target="_blank" rel="noopener noreferrer">
                    {t('viewOnDouyin')}
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Chat Section */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-xl overflow-hidden flex flex-col h-[calc(100vh-250px)] lg:h-[calc(100vh-180px)]">
              {/* Chat Header */}
              <div className="p-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">{t('liveChat')}</h3>
                    <p className="text-xs text-muted-foreground">{t('realTimeInteraction')}</p>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-xl px-4 py-2 ${
                          message.sender === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-foreground'
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {message.timestamp.toLocaleTimeString(language === 'zh' ? 'zh-CN' : 'en-US', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Chat Input */}
              <div className="p-4 border-t border-border">
                <div className="flex gap-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder={t('typeMessage')}
                    className="flex-1 bg-background"
                  />
                  <Button
                    onClick={handleSendMessage}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">{t('activeVerification')}</h3>
            <p className="text-sm text-muted-foreground">
              {t('activeVerificationDesc')}
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">{t('blockchainRecord')}</h3>
            <p className="text-sm text-muted-foreground">
              {t('blockchainRecordDesc')}
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-6">
            <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-3">
              <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2">{t('automaticRewards')}</h3>
            <p className="text-sm text-muted-foreground">
              {t('automaticRewardsDesc')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
