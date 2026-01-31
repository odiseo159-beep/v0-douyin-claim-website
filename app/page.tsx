'use client';

import { Button } from "@/components/ui/button";
import { ConnectWalletButton } from "@/components/connect-wallet-button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";

export default function DouyinClaim() {
  const { t } = useLanguage();
  
  return (
    <div className="bg-background text-foreground min-h-screen font-sans relative overflow-hidden">
      {/* Floating Background Logo */}
      <div className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center">
        <div className="relative">
          {/* Purple Aura Glow */}
          <div className="absolute inset-0 bg-primary/30 rounded-full animate-pulse-glow scale-150" />
          {/* Floating Logo */}
          <Image
            src="/douyinclaimlogo.png"
            alt=""
            width={500}
            height={500}
            className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] opacity-10 animate-float"
            aria-hidden="true"
          />
        </div>
      </div>
      
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
          <ConnectWalletButton />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">{t('nowOnFlap')}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            {t('monetizeYourInfluence')}
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {' Douyin'}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-pretty leading-relaxed">
            {t('heroDescription')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild>
              <Link href="/video-test">{t('videoTest')}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">{t('yourActiveClaims')}</h2>
            <Button variant="outline" size="sm">
              {t('viewHistory')}
            </Button>
          </div>
          <div className="text-center py-16">
            <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <p className="text-muted-foreground mb-6">
              {t('noActiveClaims')}
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90" disabled>
              {t('linkDouyinAccount')}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Image 
                src="/douyinclaimlogo.png" 
                alt={t('brandName')} 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
              <span className="font-semibold">{t('brandName')}</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex gap-4">
                <a 
                  href="https://web.telegram.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  aria-label="Telegram"
                >
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.121.098.155.23.171.324.016.093.036.306.02.472z"/>
                  </svg>
                </a>
                <a 
                  href="https://x.com/home" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
              <div className="h-6 w-px bg-border" />
              <div className="flex gap-6 text-sm text-muted-foreground">
                <a href="#" className="hover:text-foreground transition-colors">{t('documentation')}</a>
                <a href="#" className="hover:text-foreground transition-colors">{t('support')}</a>
                <a href="#" className="hover:text-foreground transition-colors">{t('terms')}</a>
                <a href="#" className="hover:text-foreground transition-colors">{t('privacy')}</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
