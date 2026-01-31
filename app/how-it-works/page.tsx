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
          <Button variant="ghost" asChild>
            <Link href="/">{t('home')}</Link>
          </Button>
          <LanguageSwitcher />
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            {t('connectWallet')}
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {t('howItWorksTitle')}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            {t('howItWorksDescription')}
          </p>
        </div>
      </section>

      {/* Live Demo Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                {t('realTimeVerification')}
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
                {t('verificationWithFlap')}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t('verificationDescription')}
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t('decentralizedValidation')}</h4>
                    <p className="text-muted-foreground text-sm">{t('noIntermediaries')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t('instantProcessing')}</h4>
                    <p className="text-muted-foreground text-sm">{t('rewardsCalculatedRealTime')}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{t('fullyTransparent')}</h4>
                    <p className="text-muted-foreground text-sm">{t('verifyOnBlockchain')}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center">
              <div className="relative">
                {/* Phone Mockup */}
                <div className="w-[320px] h-[600px] bg-gradient-to-br from-card/50 to-card rounded-[3rem] border-8 border-border shadow-2xl overflow-hidden relative backdrop-blur-sm">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-background rounded-b-2xl z-10" />
                  
                  {/* Screen Content */}
                  <div className="absolute inset-4 bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 rounded-[2rem] overflow-hidden">
                    {/* Video Placeholder */}
                    <div className="w-full h-full flex items-center justify-center">
                      <svg className="w-20 h-20 text-muted-foreground/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    
                    {/* Verification Badge */}
                    <div className="absolute top-6 right-6">
                      <div className="bg-background/95 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/50 shadow-lg flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs font-semibold text-primary">Flap Oracle: Verifying...</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-[3rem] blur-3xl -z-10" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Workflow */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('simpleWorkflow')}</h2>
          <p className="text-lg text-muted-foreground">{t('chooseYourRole')}</p>
        </div>

        <Tabs defaultValue="creators" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="creators" className="text-base">{t('forCreators')}</TabsTrigger>
            <TabsTrigger value="earners" className="text-base">{t('forEarners')}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="creators" className="space-y-0">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="flex gap-6 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-primary font-bold text-lg">1</span>
                    </div>
                    <div className="w-0.5 h-full bg-border absolute top-12 left-6" />
                  </div>
                  <div className="flex-1 pb-12">
                    <h3 className="text-2xl font-bold mb-3">{t('connectYourWallet')}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {t('connectWalletDesc')}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Flap Network</Badge>
                      <Badge variant="outline">MetaMask</Badge>
                      <Badge variant="outline">WalletConnect</Badge>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-6 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-primary font-bold text-lg">2</span>
                    </div>
                    <div className="w-0.5 h-full bg-border absolute top-12 left-6" />
                  </div>
                  <div className="flex-1 pb-12">
                    <h3 className="text-2xl font-bold mb-3">{t('linkDouyinAccountStep')}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {t('linkDouyinDesc')}
                    </p>
                    <div className="bg-muted/50 rounded-lg p-4 border border-border">
                      <p className="text-sm text-muted-foreground">
                        {t('dataProtected')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold text-lg">3</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{t('automateFeeCollection')}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {t('automateFeeDesc')}
                    </p>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                      {t('startNow')}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="earners" className="space-y-0">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="flex gap-6 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-secondary font-bold text-lg">1</span>
                    </div>
                    <div className="w-0.5 h-full bg-border absolute top-12 left-6" />
                  </div>
                  <div className="flex-1 pb-12">
                    <h3 className="text-2xl font-bold mb-3">{t('verifyDouyinActivity')}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {t('verifyDouyinDesc')}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="border-secondary/50 text-secondary">{t('automaticVerification')}</Badge>
                      <Badge variant="outline" className="border-secondary/50 text-secondary">{t('noKYC')}</Badge>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex gap-6 relative">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0 z-10">
                      <span className="text-secondary font-bold text-lg">2</span>
                    </div>
                    <div className="w-0.5 h-full bg-border absolute top-12 left-6" />
                  </div>
                  <div className="flex-1 pb-12">
                    <h3 className="text-2xl font-bold mb-3">{t('claimAirdrops')}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {t('claimAirdropsDesc')}
                    </p>
                    <div className="bg-muted/50 rounded-lg p-4 border border-border">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{t('estimatedRewards')}</span>
                        <span className="text-2xl font-bold text-secondary">$0.00</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center flex-shrink-0">
                      <span className="text-secondary font-bold text-lg">3</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3">{t('instantSettlement')}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {t('instantSettlementDesc')}
                    </p>
                    <Button className="bg-secondary text-foreground hover:bg-secondary/90">
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
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{t('faq')}</h2>
          <p className="text-lg text-muted-foreground">{t('faqDescription')}</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="item-1" className="bg-card border border-border rounded-xl px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="text-lg font-semibold">{t('whatIsFlap')}</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {t('whatIsFlapAnswer')}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="bg-card border border-border rounded-xl px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="text-lg font-semibold">{t('areFundsSafe')}</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {t('areFundsSafeAnswer')}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="bg-card border border-border rounded-xl px-6">
            <AccordionTrigger className="text-left hover:no-underline">
              <span className="text-lg font-semibold">{t('howOracleWorks')}</span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed">
              {t('howOracleWorksAnswer')}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/douyinclaimlogo.png" 
                alt={t('brandName')} 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
              <span className="font-semibold">{t('brandName')}</span>
            </Link>
            <div className="flex gap-6 text-sm text-muted-foreground">
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
