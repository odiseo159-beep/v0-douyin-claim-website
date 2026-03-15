'use client';

import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ConnectWalletButton } from "@/components/connect-wallet-button";
import { useLanguage } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";

export default function Documentation() {
  const { t } = useLanguage();

  return (
    <div className="bg-background text-foreground min-h-screen font-sans relative overflow-hidden">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[10%] left-[-5%] w-[400px] h-[400px] bg-primary/6 rounded-full blur-[100px]" />
        <div className="absolute bottom-[10%] right-[-5%] w-[350px] h-[350px] bg-accent/6 rounded-full blur-[80px]" />
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
          <ConnectWalletButton />
        </div>
      </nav>

      {/* Documentation Content */}
      <div className="max-w-3xl mx-auto px-6 pt-20 pb-16 relative z-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-10">{t('docTitle')}</h1>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">{t('docOverviewTitle')}</h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
            {t('docOverviewP1')}
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t('docOverviewP2')}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">{t('docMechanicsTitle')}</h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-5">
            {t('docMechanicsIntro')}
          </p>

          <div className="space-y-4">
            <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-xl p-5">
              <h3 className="text-base font-semibold mb-2">{t('docConnectionTitle')}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                {t('docConnectionP1')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 ml-3">
                <li>{t('docConnectionLi1')}</li>
                <li>{t('docConnectionLi2')}</li>
              </ul>
            </div>

            <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-xl p-5">
              <h3 className="text-base font-semibold mb-2">{t('docOracleTitle')}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                {t('docOracleP1')}
              </p>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 ml-3">
                <li><strong>{t('docOracleLi1').split(':')[0]}:</strong> {t('docOracleLi1').split(':')[1]}</li>
                <li><strong>{t('docOracleLi2').split(':')[0]}:</strong> {t('docOracleLi2').split(':')[1]}</li>
                <li><strong>{t('docOracleLi3').split(':')[0]}:</strong> {t('docOracleLi3').split(':')[1]}</li>
              </ul>
            </div>

            <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-xl p-5">
              <h3 className="text-base font-semibold mb-2">{t('docSettlementTitle')}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t('docSettlementP1')}
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">{t('docQuickStartTitle')}</h2>
          <div className="space-y-4">
            <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-xl p-5">
              <h3 className="text-base font-semibold mb-2">{t('docStep1Title')}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t('docStep1Desc')}
              </p>
            </div>

            <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-xl p-5">
              <h3 className="text-base font-semibold mb-2">{t('docStep2Title')}</h3>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1.5 ml-3">
                <li>{t('docStep2Li1')}</li>
                <li>{t('docStep2Li2')}</li>
                <li>{t('docStep2Li3')}</li>
              </ul>
            </div>

            <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-xl p-5">
              <h3 className="text-base font-semibold mb-2">{t('docStep3Title')}</h3>
              <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1.5 ml-3">
                <li>{t('docStep3Li1')}</li>
                <li>{t('docStep3Li2')}</li>
                <li>{t('docStep3Li3')}</li>
                <li>{t('docStep3Li4')}</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">{t('docFAQTitle')}</h2>
          <div className="space-y-3">
            <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-xl p-5">
              <h3 className="font-semibold text-sm mb-1.5">{t('docFAQ1Q')}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t('docFAQ1A')}
              </p>
            </div>

            <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-xl p-5">
              <h3 className="font-semibold text-sm mb-1.5">{t('docFAQ2Q')}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t('docFAQ2A')}
              </p>
            </div>

            <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-xl p-5">
              <h3 className="font-semibold text-sm mb-1.5">{t('docFAQ3Q')}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t('docFAQ3A')}
              </p>
            </div>

            <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-xl p-5">
              <h3 className="font-semibold text-sm mb-1.5">{t('docFAQ4Q')}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t('docFAQ4A')}
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">{t('docTokenomicsTitle')}</h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-3">
            {t('docTokenomicsP1')}
          </p>
          <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1.5 ml-3 mb-3">
            <li>{t('docTokenomicsLi1')}</li>
            <li>{t('docTokenomicsLi2')}</li>
            <li>{t('docTokenomicsLi3')}</li>
          </ul>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {t('docTokenomicsP2')}
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">{t('docRoadmapTitle')}</h2>
          <div className="space-y-3">
            <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-xl p-5">
              <h3 className="font-semibold text-sm mb-1.5">{t('docPhase1')}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t('docPhase1Desc')}
              </p>
            </div>

            <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-xl p-5">
              <h3 className="font-semibold text-sm mb-1.5">{t('docPhase2')}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t('docPhase2Desc')}
              </p>
            </div>

            <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-xl p-5">
              <h3 className="font-semibold text-sm mb-1.5">{t('docPhase3')}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t('docPhase3Desc')}
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-bold mb-3">{t('docSupportTitle')}</h2>
          <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-xl p-5">
            <p className="text-muted-foreground text-sm leading-relaxed mb-3">
              {t('docSupportP1')}
            </p>
            <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1.5 ml-3">
              <li>{t('docSupportTelegram')} <a href="https://web.telegram.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">{t('docCommunityGroup')}</a></li>
              <li>{t('docSupportTwitter')} <a href="https://x.com/home" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">@DouyinClaim</a></li>
            </ul>
          </div>
        </section>

        <div className="bg-primary/10 border border-primary/20 rounded-xl p-5">
          <p className="text-xs text-muted-foreground">
            <strong>{t('docDisclaimer').split(':')[0]}:</strong> {t('docDisclaimer').split(':')[1]}
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm relative z-10">
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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
