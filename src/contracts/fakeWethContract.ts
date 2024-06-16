import { erc20Abi } from "viem";

export const FAKE_WETH_CONTRACT_CONFIG = {
  address: "0x4Ed72e128865ddEa054261B8ef6b756C0C17C3f5",
  abi: erc20Abi,
} as const;
