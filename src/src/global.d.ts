interface Window {
  keplr?: {
    enable: (chainId: string) => Promise<void>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getOfflineSigner: (chainId: string) => any;
  };
}