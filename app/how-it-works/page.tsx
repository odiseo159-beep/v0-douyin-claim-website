'use client';

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <div className="bg-background text-foreground min-h-screen font-sans relative overflow-hidden">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-accent/8 rounded-full blur-[80px]" />
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
          <Button variant="ghost" className="text-sm" asChild>
            <Link href="/">{t('home')}</Link>
          </Button>
          <LanguageSwitcher />
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
            {t('connectWallet')}
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-16 md:pt-32 md:pb-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {t('howItWorksTitle')}
            </span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t('howItWorksDescription')}
          </p>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="max-w-6xl mx-auto px-6 pb-20 relative z-10">
        <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="flex-1">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                {t('realTimeVerification')}
              </Badge>
              <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
                {t('verificationWithFlap')}
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {t('verificationDescription')}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm">{t('decentralizedValidation')}</h4>
                    <p className="text-muted-foreground text-sm">{t('noIntermediaries')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm">{t('instantProcessing')}</h4>
                    <p className="text-muted-foreground text-sm">{t('rewardsCalculatedRealTime')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1 text-sm">{t('fullyTransparent')}</h4>
                    <p className="text-muted-foreground text-sm">{t('verifyOnBlockchain')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <div className="relative">
                {/* Phone Mockup */}
                <div className="w-[280px] h-[540px] bg-gradient-to-br from-card/50 to-card rounded-[2.5rem] border-[6px] border-border/60 shadow-2xl overflow-hidden relative backdrop-blur-sm">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-background rounded-b-xl z-10" />

                  {/* Screen Content */}
                  <div className="absolute inset-3 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10 rounded-[2rem] overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-16 h-16 text-muted-foreground/20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>

                    {/* Verification Badge */}
                    <div className="absolute top-5 right-4">
                      <div className="bg-background/95 backdrop-blur-sm rounded-full px-3 py-1.5 border border-primary/50 shadow-lg flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <span className="text-[10px] font-semibold text-primary">Flap Oracle: Verifying...</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-accent/10 to-secondary/15 rounded-[2.5rem] blur-3xl -z-10 scale-110" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Workflow */}
      <section className="max-w-6xl mx-auto px-6 pb-20 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">{t('simpleWorkflow')}</h2>
          <p className="text-muted-foreground">{t('chooseYourRole')}</p>
        </div>

        <Tabs defaultValue="creators" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-10">
            <TabsTrigger value="creators" className="text-sm">{t('forCreators')}</TabsTrigger>
            <TabsTrigger value="earners" className="text-sm">{t('forEarners')}</TabsTrigger>
          </TabsList>

          <TabsContent value="creators" className="space-y-0">
            <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl p-8 md:p-10">
              <div className="space-y-10">
                {/* Step 1 */}
                <div className="flex gap-5 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-11 h-11 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <div className="w-0.5 h-full bg-border/60 absolute top-11 left-[22px]" />
                  </div>
                  <div className="flex-1 pb-10">
                    <h3 className="text-xl font-bold mb-2">{t('connectYourWallet')}</h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {t('connectWalletDesc')}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">Flap Network</Badge>
                      <Badge variant="outline" className="text-xs">MetaMask</Badge>
                      <Badge variant="outline" className="text-xs">WalletConnect</Badge>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-5 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-11 h-11 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <div className="w-0.5 h-full bg-border/60 absolute top-11 left-[22px]" />
                  </div>
                  <div className="flex-1 pb-10">
                    <h3 className="text-xl font-bold mb-2">{t('linkDouyinAccountStep')}</h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {t('linkDouyinDesc')}
                    </p>
                    <div className="bg-muted/30 rounded-xl p-4 border border-border/40">
                      <p className="text-xs text-muted-foreground">
                        {t('dataProtected')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-11 h-11 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">3</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{t('automateFeeCollection')}</h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {t('automateFeeDesc')}
                    </p>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">
                      {t('startNow')}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="earners" className="space-y-0">
            <div className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-2xl p-8 md:p-10">
              <div className="space-y-10">
                {/* Step 1 */}
                <div className="flex gap-5 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-11 h-11 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-secondary font-bold">1</span>
                    </div>
                    <div className="w-0.5 h-full bg-border/60 absolute top-11 left-[22px]" />
                  </div>
                  <div className="flex-1 pb-10">
                    <h3 className="text-xl font-bold mb-2">{t('verifyDouyinActivity')}</h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {t('verifyDouyinDesc')}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-secondary/50 text-secondary text-xs">{t('automaticVerification')}</Badge>
                      <Badge variant="outline" className="border-secondary/50 text-secondary text-xs">{t('noKYC')}</Badge>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-5 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-11 h-11 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-secondary font-bold">2</span>
                    </div>
                    <div className="w-0.5 h-full bg-border/60 absolute top-11 left-[22px]" />
                  </div>
                  <div className="flex-1 pb-10">
                    <h3 className="text-xl font-bold mb-2">{t('claimAirdrops')}</h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {t('claimAirdropsDesc')}
                    </p>
                    <div className="bg-muted/30 rounded-xl p-4 border border-border/40">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{t('estimatedRewards')}</span>
                        <span className="text-xl font-bold text-secondary">$0.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-11 h-11 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                      <span className="text-secondary font-bold">3</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{t('instantSettlement')}</h3>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {t('instantSettlementDesc')}
                    </p>
                    <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold">
                      {t('startEarning')}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Technical FAQ */}
      <section className="max-w-3xl mx-auto px-6 pb-20 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">{t('faq')}</h2>
          <p className="text-muted-foreground">{t('faqDescription')}</p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          <AccordionItem value="item-1" className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-xl px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="font-semibold">{t('whatIsFlap')}</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
              {t('whatIsFlapAnswer')}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-xl px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="font-semibold">{t('areFundsSafe')}</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
              {t('areFundsSafeAnswer')}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card/60 backdrop-blur-sm border border-border/40 rounded-xl px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="font-semibold">{t('howOracleWorks')}</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
              {t('howOracleWorksAnswer')}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt={t('brandName')}
                width={28}
                height={28}
                className="w-7 h-7"
              />
              <span className="font-semibold text-sm">{t('brandName')}</span>
            </Link>
            <div className="flex gap-5 text-xs text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">{t('documentation')}</a>
              <a href="#" className="hover:text-foreground transition-colors">{t('support')}</a>
              <a href="#" className="hover:text-foreground transition-colors">{t('terms')}</a>
              <a href="#" className="hover:text-foreground transition-colors">{t('privacy')}</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
