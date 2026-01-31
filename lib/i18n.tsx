'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'zh' | 'en';

interface Translations {
  [key: string]: {
    zh: string;
    en: string;
  };
}

export const translations: Translations = {
  // Brand
  brandName: {
    zh: '抖领',
    en: 'DouyinClaim',
  },
  
  // Navbar
  howItWorks: {
    zh: '如何运作',
    en: 'How It Works',
  },
  connectWallet: {
    zh: '连接钱包',
    en: 'Connect Wallet',
  },
  connecting: {
    zh: '连接中...',
    en: 'Connecting...',
  },
  home: {
    zh: '首页',
    en: 'Home',
  },
  backToHome: {
    zh: '返回首页',
    en: 'Back to Home',
  },
  
  // Hero Section
  nowOnFlap: {
    zh: '现已上线 Flap Network',
    en: 'Now on Flap Network',
  },
  monetizeYourInfluence: {
    zh: '将你的抖音影响力变现',
    en: 'Monetize your influence on',
  },
  heroDescription: {
    zh: '首个去中心化平台，以透明和自动化的方式奖励你的抖音视频真实互动。',
    en: 'The first decentralized platform that rewards the real engagement of your Douyin videos transparently and automatically.',
  },
  videoTest: {
    zh: '视频测试',
    en: 'Video Test',
  },
  
  // Dashboard
  yourActiveClaims: {
    zh: '你的活跃申领',
    en: 'Your Active Claims',
  },
  viewHistory: {
    zh: '查看历史',
    en: 'View History',
  },
  noActiveClaims: {
    zh: '你没有活跃的申领。连接你的抖音账户开始获取奖励。',
    en: 'You have no active claims. Connect your Douyin account to start earning rewards.',
  },
  linkDouyinAccount: {
    zh: '绑定抖音账户',
    en: 'Link Douyin Account',
  },
  
  // Footer
  documentation: {
    zh: '文档',
    en: 'Documentation',
  },
  support: {
    zh: '支持',
    en: 'Support',
  },
  terms: {
    zh: '条款',
    en: 'Terms',
  },
  privacy: {
    zh: '隐私',
    en: 'Privacy',
  },
  
  // Video Test Page
  videoTestTitle: {
    zh: '视频测试',
    en: 'Video Test',
  },
  videoTestDescription: {
    zh: '观看我们的预言机如何实时监控互动',
    en: 'Watch how our oracle monitors engagement in real-time',
  },
  verifiedByFlap: {
    zh: 'Flap 预言机验证',
    en: 'Verified by Flap Oracle',
  },
  videoTestInfo: {
    zh: '测试视频 - 抖音申领',
    en: 'Test Video - Douyin Claim',
  },
  videoTestInfoDescription: {
    zh: '此视频正在由我们的去中心化预言机实时监控。每次互动（点赞、评论、分享）都会在 Flap 区块链上记录和验证。',
    en: 'This video is being monitored in real-time by our decentralized oracle. Every interaction (like, comment, share) is recorded and verified on the Flap blockchain.',
  },
  viewOnDouyin: {
    zh: '在抖音查看',
    en: 'View on Douyin',
  },
  liveChat: {
    zh: '实时聊天',
    en: 'Live Chat',
  },
  realTimeInteraction: {
    zh: '实时互动',
    en: 'Real-time interaction',
  },
  welcomeMessage: {
    zh: '欢迎来到 DouyinClaim 视频测试！此视频正在由我们的预言机实时监控。',
    en: 'Welcome to DouyinClaim Video Test! This video is being monitored by our oracle in real-time.',
  },
  systemResponse: {
    zh: '消息已收到。此视频的互动正在区块链上记录。',
    en: 'Message received. The engagement of this video is being recorded on the blockchain.',
  },
  typeMessage: {
    zh: '输入消息...',
    en: 'Type a message...',
  },
  activeVerification: {
    zh: '验证进行中',
    en: 'Active Verification',
  },
  activeVerificationDesc: {
    zh: '预言机正在实时监控所有互动',
    en: 'The oracle is monitoring all interactions in real-time',
  },
  blockchainRecord: {
    zh: '区块链记录',
    en: 'Blockchain Record',
  },
  blockchainRecordDesc: {
    zh: '每次申领都在 Flap Network 上不可篡改地记录',
    en: 'Every claim is recorded immutably on Flap Network',
  },
  automaticRewards: {
    zh: '自动奖励',
    en: 'Automatic Rewards',
  },
  automaticRewardsDesc: {
    zh: '代币根据互动自动分配',
    en: 'Tokens are distributed automatically based on engagement',
  },
  
  // How It Works Page
  howItWorksTitle: {
    zh: '如何运作',
    en: 'How It Works',
  },
  howItWorksDescription: {
    zh: '将 Flap 生态系统的创作者费用路由给抖音创作者。安全、透明、自动化。',
    en: 'Route creator fees from the Flap ecosystem to Douyin creators. Secure, transparent, and automated.',
  },
  realTimeVerification: {
    zh: '实时验证',
    en: 'Real-time Verification',
  },
  verificationWithFlap: {
    zh: '使用 Flap 预言机实时验证',
    en: 'Real-time verification with Flap Oracle',
  },
  verificationDescription: {
    zh: '我们连接到 Flap 区块链的预言机持续扫描你在抖音视频上的互动。每个点赞、评论和分享都以去中心化和安全的方式进行验证。',
    en: 'Our oracle connected to the Flap blockchain continuously scans interactions on your Douyin videos. Every like, comment, and share is verified in a decentralized and secure manner.',
  },
  decentralizedValidation: {
    zh: '去中心化验证',
    en: 'Decentralized Validation',
  },
  noIntermediaries: {
    zh: '无中介，只有可审计的代码',
    en: 'No intermediaries, just auditable code',
  },
  instantProcessing: {
    zh: '即时处理',
    en: 'Instant Processing',
  },
  rewardsCalculatedRealTime: {
    zh: '你的奖励实时计算',
    en: 'Your rewards are calculated in real-time',
  },
  fullyTransparent: {
    zh: '完全透明',
    en: 'Fully Transparent',
  },
  verifyOnBlockchain: {
    zh: '在区块链上验证每笔交易',
    en: 'Verify every transaction on the blockchain',
  },
  simpleWorkflow: {
    zh: '简单的工作流程',
    en: 'Simple Workflow',
  },
  chooseYourRole: {
    zh: '选择你的角色并了解如何开始',
    en: 'Choose your role and discover how to start',
  },
  forCreators: {
    zh: '创作者',
    en: 'For Creators',
  },
  forEarners: {
    zh: '赚取者',
    en: 'For Earners',
  },
  connectYourWallet: {
    zh: '连接你的钱包',
    en: 'Connect Your Wallet',
  },
  connectWalletDesc: {
    zh: '连接与 Flap Network 兼容的钱包。我们推荐 MetaMask 或 WalletConnect 以获得最佳体验。',
    en: 'Connect your wallet compatible with Flap Network. We recommend MetaMask or WalletConnect for the best experience.',
  },
  linkDouyinAccountStep: {
    zh: '绑定你的抖音账户',
    en: 'Link your Douyin account',
  },
  linkDouyinDesc: {
    zh: '使用你的钱包签名消息以安全地绑定你的抖音账户。我们不会分享你的凭证。',
    en: 'Sign a message with your wallet to securely link your Douyin account. We do not share your credentials.',
  },
  dataProtected: {
    zh: '你的数据受端到端加密保护',
    en: 'Your data is protected with end-to-end encryption',
  },
  automateFeeCollection: {
    zh: '自动收取费用',
    en: 'Automate fee collection',
  },
  automateFeeDesc: {
    zh: '我们的系统根据你的互动自动将 Flap 生态系统的费用路由到你的账户。',
    en: 'Our system automatically routes fees from the Flap ecosystem to your account based on your engagement.',
  },
  startNow: {
    zh: '立即开始',
    en: 'Start Now',
  },
  verifyDouyinActivity: {
    zh: '验证你的抖音活动',
    en: 'Verify your Douyin activity',
  },
  verifyDouyinDesc: {
    zh: '连接你的抖音账户，以便预言机可以实时验证你的互动（点赞、评论、分享）。',
    en: 'Connect your Douyin account so the oracle can verify your interactions (likes, comments, shares) in real-time.',
  },
  automaticVerification: {
    zh: '自动验证',
    en: 'Automatic verification',
  },
  noKYC: {
    zh: '无 KYC',
    en: 'No KYC',
  },
  claimAirdrops: {
    zh: '申领你的可用空投',
    en: 'Claim your available airdrops',
  },
  claimAirdropsDesc: {
    zh: '验证你的活动后，你可以直接从仪表板查看和申领累积的奖励。',
    en: 'Once your activity is verified, you can view and claim your accumulated rewards directly from the dashboard.',
  },
  estimatedRewards: {
    zh: '预估奖励',
    en: 'Estimated Rewards',
  },
  instantSettlement: {
    zh: '即时结算',
    en: 'Instant Settlement',
  },
  instantSettlementDesc: {
    zh: '直接在你的钱包中接收代币。无延迟，无隐藏费用，只有基于你的互动的公平奖励。',
    en: 'Receive your tokens directly in your wallet. No delays, no hidden fees, just fair rewards for your engagement.',
  },
  startEarning: {
    zh: '开始赚取',
    en: 'Start Earning',
  },
  faq: {
    zh: '常见问题',
    en: 'Frequently Asked Questions',
  },
  faqDescription: {
    zh: '关于 DouyinClaim 你需要知道的一切',
    en: 'Everything you need to know about DouyinClaim',
  },
  whatIsFlap: {
    zh: '什么是 Flap？',
    en: 'What is Flap?',
  },
  whatIsFlapAnswer: {
    zh: 'Flap 是专为社交媒体和内容应用设计的第二层区块链。它提供快速交易、低费用和强大的内容创作者生态系统。DouyinClaim 建立在 Flap 上，以确保即时支付和去中心化验证。',
    en: 'Flap is a layer 2 blockchain designed specifically for social media and content applications. It offers fast transactions, low fees, and a robust ecosystem for content creators. DouyinClaim is built on Flap to ensure instant payments and decentralized verification.',
  },
  areFundsSafe: {
    zh: '我的资金安全吗？',
    en: 'Are my funds safe?',
  },
  areFundsSafeAnswer: {
    zh: '绝对安全。DouyinClaim 使用经过审计的智能合约，永远不会托管你的资金。所有交易在区块链上都是透明和可验证的。你的钱包是唯一控制你代币的实体。此外，我们使用最佳安全实践，我们的代码对公众开放审计。',
    en: 'Absolutely. DouyinClaim uses audited smart contracts and never has custody of your funds. All transactions are transparent and verifiable on the blockchain. Your wallet is the only one that has control over your tokens. Additionally, we use best security practices and our code is open source for public audit.',
  },
  howOracleWorks: {
    zh: '预言机如何工作？',
    en: 'How does the Oracle work?',
  },
  howOracleWorksAnswer: {
    zh: '我们的预言机是一个去中心化服务，将链下数据（如抖音互动）与 Flap 区块链连接。它使用多个验证节点来确保数据准确且不可被操纵。',
    en: 'Our oracle is a decentralized service that connects off-chain data (like Douyin interactions) with the Flap blockchain. It uses multiple validator nodes to ensure data is accurate and cannot be manipulated.',
  },
  
  // Language
  language: {
    zh: '语言',
    en: 'Language',
  },
  chinese: {
    zh: '中文',
    en: 'Chinese',
  },
  english: {
    zh: '英文',
    en: 'English',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh');

  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
