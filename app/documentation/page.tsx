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
          <ConnectWalletButton />
        </div>
      </nav>

      {/* Documentation Content */}
      <div className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">DouyinClaim Official Documentation</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">1. Project Overview</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            DouyinClaim (抖领) is a decentralized SocialFi protocol bridging the gap between the massive Douyin (TikTok China) creator economy and the Flap Network.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We enable creators to monetize their social engagement (views, likes, shares) directly on-chain, eliminating traditional Web2 intermediaries and payment delays. By leveraging optimistic oracle verification, we turn "clout" into liquid assets instantly.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">2. How It Works (The Mechanics)</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            The protocol operates on a three-step cycle: Connect, Verify, Reward.
          </p>
          
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">A. The Connection Layer</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                Users connect their EVM-compatible wallet (Metamask, Rabby, etc.) to the Flap Network. To prove ownership of a Douyin account without compromising security, we use a gasless cryptographic signature.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li>No passwords required.</li>
                <li>No write-access to your social account.</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">B. The Oracle Engine</h3>
              <p className="text-muted-foreground leading-relaxed mb-2">
                DouyinClaim utilizes a specialized Optimistic Oracle running off-chain.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                <li><strong>Scan:</strong> The Oracle monitors registered Douyin profiles for new content.</li>
                <li><strong>Verify:</strong> It validates engagement metrics against public APIs.</li>
                <li><strong>Sign:</strong> It generates a cryptographic proof of the engagement data.</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">C. The Settlement Layer (Smart Contracts)</h3>
              <p className="text-muted-foreground leading-relaxed">
                The proof is submitted to the DouyinClaim Core Contract on the Flap Network. The contract verifies the Oracle's signature and automatically releases funds from the Reward Pool directly to the user's wallet.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">3. Quick Start Guide</h2>
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Step 1: Wallet Setup</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ensure you have a Web3 wallet installed and configured for the Flap Mainnet. You will need a small amount of $FLAP tokens to cover network gas fees.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Step 2: Link Identity</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Navigate to the Dashboard.</li>
                <li>Enter your valid Douyin Profile URL.</li>
                <li>Sign the ownership message (this does not cost gas).</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-3">Step 3: Claim Rewards</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Once your video is tracked, the dashboard will show "Pending Rewards".</li>
                <li>Click the "Claim" button.</li>
                <li>Approve the transaction in your wallet.</li>
                <li>Funds arrive instantly.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">4. Technical FAQ</h2>
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Q: Is DouyinClaim affiliated with ByteDance?</h3>
              <p className="text-muted-foreground leading-relaxed">
                A: No. We are an independent decentralized protocol built on public blockchain technology. We only access publicly available Douyin data.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Q: What are the fees?</h3>
              <p className="text-muted-foreground leading-relaxed">
                A: We charge a 5% protocol fee on claimed rewards. There are also standard Flap Network gas fees (typically &lt;$0.01 per transaction).
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Q: Can I claim past videos?</h3>
              <p className="text-muted-foreground leading-relaxed">
                A: Currently, only videos published after linking your account are eligible. Historical claims may be enabled in future governance votes.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">Q: Is this safe? Smart contract risks?</h3>
              <p className="text-muted-foreground leading-relaxed">
                A: Our contracts are audited by CertiK. However, like all DeFi protocols, there is inherent smart contract risk. Never invest more than you can afford to lose.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">5. Tokenomics</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The $FLAP token is the native currency of the Flap Network and is used for:
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
            <li>Paying network transaction fees</li>
            <li>Distributing creator rewards</li>
            <li>Governance voting on protocol upgrades</li>
          </ul>
          <p className="text-muted-foreground leading-relaxed">
            DouyinClaim does not mint its own token. All rewards are paid in $FLAP directly from the community reward pool.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">6. Roadmap</h2>
          <div className="space-y-4">
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">✅ Phase 1 (Q1 2025) - Beta Launch</h3>
              <p className="text-muted-foreground leading-relaxed">
                MVP with wallet connection, Oracle integration, and basic claiming.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">🔄 Phase 2 (Q2 2025) - Multi-Platform</h3>
              <p className="text-muted-foreground leading-relaxed">
                Expand to support Kuaishou, Bilibili, and international TikTok.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="font-semibold mb-2">🔮 Phase 3 (Q3 2025) - Creator DAO</h3>
              <p className="text-muted-foreground leading-relaxed">
                Launch governance token and decentralized creator voting on reward formulas.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-4">7. Support & Community</h2>
          <div className="bg-card border border-border rounded-xl p-6">
            <p className="text-muted-foreground leading-relaxed mb-4">
              Need help? Join our community channels:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
              <li>Telegram: <a href="https://web.telegram.org" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Community Group</a></li>
              <li>X (Twitter): <a href="https://x.com/home" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">@DouyinClaim</a></li>
            </ul>
          </div>
        </section>

        <div className="bg-primary/10 border border-primary/20 rounded-xl p-6">
          <p className="text-sm text-muted-foreground">
            <strong>Disclaimer:</strong> DouyinClaim is beta software. Use at your own risk. Always DYOR (Do Your Own Research) before connecting wallets or claiming rewards.
          </p>
        </div>
      </div>

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
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
