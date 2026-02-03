'use client';

import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { Button } from './ui/button';
import { useLanguage } from '@/lib/i18n';
import { useState } from 'react';

export function ConnectWalletButton() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();
  const { t } = useLanguage();
  const [isConnecting, setIsConnecting] = useState(false);

  const handleConnect = async () => {
    try {
      setIsConnecting(true);
      connect({ connector: injected() });
    } catch (error) {
      console.error('[v0] Error connecting wallet:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  if (isConnected && address) {
    return (
      <Button 
        variant="outline"
        onClick={() => disconnect()}
        className="bg-transparent"
      >
        {`${address.slice(0, 6)}...${address.slice(-4)}`}
      </Button>
    );
  }

  return (
    <Button 
      className="bg-primary text-primary-foreground hover:bg-primary/90"
      onClick={handleConnect}
      disabled={isConnecting}
    >
      {isConnecting ? (t('connecting') || 'Connecting...') : t('connectWallet')}
    </Button>
  );
}
