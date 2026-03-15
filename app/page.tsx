'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ConnectWalletButton } from "@/components/connect-wallet-button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";

export default function DouyinClaim() {
  const { t } = useLanguage();
  const [supportOpen, setSupportOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <div className="bg-background text-foreground min-h-screen font-sans relative overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse-glow scale-150" />
            <Image
              src="/logo.png"
              alt=""
              width={500}
              height={500}
              className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] opacity-[0.06] animate-float"
              aria-hidden="true"
            />
          </div>
        </div>
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
          <Button variant="ghost" className="hidden md:inline-flex text-sm" asChild>
            <Link href="/documentation">{t('documentation')}</Link>
          </Button>
          <LanguageSwitcher />
          <ConnectWalletButton />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-36 md:pb-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-10">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary">{t('nowOnFlap')}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
            {t('monetizeYourInfluence')}
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {' Douyin'}
            </span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            {t('heroDescription')}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-16">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 h-12 text-base font-semibold shadow-lg shadow-primary/20" asChild>
              <Link href="/video-test">{t('videoTest')}</Link>
            </Button>
            <Button size="lg" variant="outline" className="px-8 h-12 text-base border-border/60" asChild>
              <Link href="/how-it-works">{t('howItWorks')}</Link>
            </Button>
          </div>

          {/* Contract Address Bar */}
          <div className="max-w-lg mx-auto">
            <div className="bg-card/80 backdrop-blur-sm border border-border/60 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground mb-0.5">{t('contractAddress')}</p>
                  <code className="text-sm font-mono text-foreground truncate block">
                    Soon
                  </code>
                </div>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="flex-shrink-0 bg-transparent border-border/60"
                onClick={() => {
                  navigator.clipboard.writeText('SOON');
                }}
              >
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                {t('copyAddress')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-6xl mx-auto px-6 pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl p-6 hover:border-primary/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2 text-sm">{t('decentralizedValidation') || 'Decentralized Validation'}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t('noIntermediaries') || 'No intermediaries. Direct verification on-chain.'}</p>
          </div>
          <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl p-6 hover:border-accent/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2 text-sm">{t('instantProcessing') || 'Instant Processing'}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t('rewardsCalculatedRealTime') || 'Rewards calculated in real-time.'}</p>
          </div>
          <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl p-6 hover:border-secondary/30 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="font-semibold mb-2 text-sm">{t('fullyTransparent') || 'Fully Transparent'}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t('verifyOnBlockchain') || 'Verify every transaction on the blockchain.'}</p>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20 relative z-10">
        <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl p-8 md:p-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl md:text-2xl font-bold">{t('yourActiveClaims')}</h2>
            <Button variant="outline" size="sm" className="border-border/60">
              {t('viewHistory')}
            </Button>
          </div>
          <div className="text-center py-12">
            <div className="w-14 h-14 rounded-2xl bg-muted/50 flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <p className="text-muted-foreground mb-6 text-sm">
              {t('noActiveClaims')}
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90" disabled>
              {t('linkDouyinAccount')}
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 relative z-10 bg-background/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt={t('brandName')}
                width={28}
                height={28}
                className="w-7 h-7"
              />
              <span className="font-semibold text-sm">{t('brandName')}</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex gap-3">
                <a
                  href="https://web.telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  aria-label="Telegram"
                >
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.121.098.155.23.171.324.016.093.036.306.02.472z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com/home"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
              <div className="h-5 w-px bg-border/60" />
              <div className="flex gap-5 text-xs text-muted-foreground">
                <Link href="/documentation" className="hover:text-foreground transition-colors">
                  {t('documentation')}
                </Link>
                <button
                  onClick={() => setSupportOpen(true)}
                  className="hover:text-foreground transition-colors"
                >
                  {t('support')}
                </button>
                <button
                  onClick={() => setTermsOpen(true)}
                  className="hover:text-foreground transition-colors"
                >
                  {t('terms')}
                </button>
                <button
                  onClick={() => setPrivacyOpen(true)}
                  className="hover:text-foreground transition-colors"
                >
                  {t('privacy')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Support Dialog */}
      <Dialog open={supportOpen} onOpenChange={setSupportOpen}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl">Need Help?</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 text-sm leading-relaxed">
            <p>
              <strong className="text-foreground">Community Support:</strong>{' '}
              <span className="text-muted-foreground">
                Join our{' '}
                <a
                  href="https://web.telegram.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Telegram
                </a>
                {' '}to chat with the team and other users. This is the fastest way to get help.
              </span>
            </p>
            <p>
              <strong className="text-foreground">Documentation:</strong>{' '}
              <span className="text-muted-foreground">
                Read our technical docs to understand how the Flap oracle verifies your Douyin content.
              </span>
            </p>
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
              <p className="text-destructive font-semibold">
                Note: Admins will NEVER ask for your private key or seed phrase.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Terms Dialog */}
      <Dialog open={termsOpen} onOpenChange={setTermsOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Terms of Service</DialogTitle>
            <DialogDescription className="text-base">
              By connecting your wallet to DouyinClaim, you acknowledge and agree to the following:
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground mb-2">Beta Software:</h3>
              <p className="text-muted-foreground">
                This protocol is in beta. While we have audited the code, smart contracts carry inherent risks. Use at your own risk.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">No Financial Advice:</h3>
              <p className="text-muted-foreground">
                Nothing on this site constitutes financial advice. $FLAP token values may fluctuate.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">User Responsibility:</h3>
              <p className="text-muted-foreground">
                You are solely responsible for the security of your private keys and wallet. DouyinClaim cannot recover lost funds.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Platform Independence:</h3>
              <p className="text-muted-foreground">
                We are an independent tool built on the Flap Network and are not directly affiliated with ByteDance or Douyin.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Privacy Dialog */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Privacy Policy</DialogTitle>
            <DialogDescription className="text-base">
              We prioritize your anonymity and data security:
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 text-sm leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground mb-2">No Personal Data Storage:</h3>
              <p className="text-muted-foreground">
                We do not store your name, email, or passwords.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Public Data Only:</h3>
              <p className="text-muted-foreground">
                We only read public on-chain data (wallet address) and public Douyin engagement metrics (likes/views) via API.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Cookies:</h3>
              <p className="text-muted-foreground">
                We use minimal local storage solely to remember your UI preferences (like Dark Mode).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">Transparency:</h3>
              <p className="text-muted-foreground">
                All transactions are visible on the Flap blockchain explorer.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
