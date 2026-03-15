'use client';

import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { VideoTestLiveChat } from "@/components/video-test-live-chat";
import { VideoPlayer } from "@/components/video-player";
import { useLanguage } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function VideoTest() {
  const { t, language } = useLanguage();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      setMessages([...messages, { id: messages.length + 1, sender: 'user', text: inputMessage, timestamp: new Date() }]);
      setInputMessage('');
    }
  };

  return (
    <div className="bg-background text-foreground min-h-screen font-sans relative overflow-hidden">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-primary/6 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[-5%] w-[300px] h-[300px] bg-accent/6 rounded-full blur-[80px]" />
      </div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 lg:px-10 py-4 border-b border-border/40 backdrop-blur-md bg-background/70 sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt={t('brandName')}
            width={44}
            height={44}
            className="w-11 h-11"
          />
          <span className="text-xl font-bold tracking-tight">{t('brandName')}</span>
        </Link>
        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden md:inline-flex text-sm" asChild>
            <Link href="/how-it-works">{t('howItWorks')}</Link>
          </Button>
          <LanguageSwitcher />
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold" asChild>
            <Link href="/">{t('backToHome')}</Link>
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8 relative z-10">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-1.5">{t('videoTestTitle')}</h1>
          <p className="text-muted-foreground text-sm">
            {t('videoTestDescription')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Video Section */}
          <div className="lg:col-span-2">
            <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl overflow-hidden">
              {/* Video Player */}
              <div className="relative aspect-[9/16] max-h-[600px] bg-black">
                <VideoPlayer
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Newscale-g720MAr05O9rIzHILq3xLcxVQK0Gf3.mp4"
                  className="aspect-[9/16] max-h-[600px]"
                />

                {/* Verification Badge */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                  <div className="bg-background/90 backdrop-blur-sm border border-primary/50 rounded-full px-4 py-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-semibold text-primary">{t('verifiedByFlap')}</span>
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-5 border-t border-border/40">
                <h2 className="text-lg font-semibold mb-2">{t('videoTestInfo')}</h2>
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
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
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
            <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl overflow-hidden flex flex-col h-[calc(100vh-250px)] lg:h-[calc(100vh-180px)]">
              {/* Chat Header */}
              <div className="p-4 border-b border-border/40">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">{t('liveChat')}</h3>
                    <p className="text-[10px] text-muted-foreground">{t('realTimeInteraction')}</p>
                  </div>
                </div>
              </div>

              {/* Firebase Live Chat */}
              <VideoTestLiveChat />
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl p-5 hover:border-primary/30 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
              <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-sm mb-1.5">{t('activeVerification')}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t('activeVerificationDesc')}
            </p>
          </div>

          <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl p-5 hover:border-accent/30 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
              <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold text-sm mb-1.5">{t('blockchainRecord')}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t('blockchainRecordDesc')}
            </p>
          </div>

          <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl p-5 hover:border-secondary/30 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-secondary/10 flex items-center justify-center mb-3">
              <svg className="w-4 h-4 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-sm mb-1.5">{t('automaticRewards')}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {t('automaticRewardsDesc')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
