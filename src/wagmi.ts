import { http, createConfig } from "wagmi";
import { Chain } from "wagmi/chains";
import { metaMask } from "wagmi/connectors";

const HOLESKY_TESTNET: Chain = {
  id: 17000,
  name: "Holesky Testnet",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://ethereum-holesky-rpc.publicnode.com"],
    },
  },
  blockExplorers: {
    default: { name: "HoleskyScan", url: "https://holesky.etherscan.io/" },
  },
  testnet: true,
};

export const config = createConfig({
  chains: [HOLESKY_TESTNET],
  connectors: [metaMask()],
  transports: {
    [HOLESKY_TESTNET.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
