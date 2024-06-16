import { useCallback } from "react";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { FAKE_WETH_CONTRACT_CONFIG } from "@contracts/fakeWethContract";

const TRANSFER_TO_ADDRESS = "0x7Ed929eE1281EfCe958FFd1B3EF681A985A5139c";
const TRANSFER_AMOUNT = BigInt(100);

export const useFakeWethTransfer = () => {
  const { data: hash, writeContract } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const transferWeth = useCallback(() => {
    writeContract({
      ...FAKE_WETH_CONTRACT_CONFIG,
      functionName: "transfer",
      args: [TRANSFER_TO_ADDRESS, TRANSFER_AMOUNT],
    });
  }, []);

  return {
    hash,
    isConfirming,
    isConfirmed,
    transferWeth,
  };
};
