import { Address } from "viem";
import { useReadContract } from "wagmi";
import { FAKE_WETH_CONTRACT_CONFIG } from "@contracts/fakeWethContract";

const WETH_DECIMALS = 18n;

export const useFakeWethBalance = (address: Address) => {
  const { data: nativeWethBalance, isLoading } = useReadContract({
    ...FAKE_WETH_CONTRACT_CONFIG,
    functionName: "balanceOf",
    args: [address],
  });

  // This will cause rounding issues when the wEthBalance is < 1 since BigInts are integers not floats.
  // Normally implement a custom function to parse it but don't want to add a bunch of boilerplate.
  const wEthBalance = (nativeWethBalance ?? 0n) / 10n ** WETH_DECIMALS;
  const wEthBalanceFormatted = wEthBalance.toLocaleString();

  return { isLoading, nativeWethBalance, wEthBalance, wEthBalanceFormatted };
};
