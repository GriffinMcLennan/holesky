import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export const useRefetchBalances = (
  isConfirmed: boolean,
  isConfirming: boolean
) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!isConfirmed || isConfirming) {
      return;
    }

    // transaction confirmed and transaction is no longer confirming
    queryClient.invalidateQueries();
  }, [isConfirming, isConfirmed]);
};
