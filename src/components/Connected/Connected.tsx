import { useFakeWethBalance } from "@hooks/useFakeWethBalance";
import { useFakeWethTransfer } from "@hooks/useFakeWethTransfer";
import { FC } from "react";
import { Address } from "viem";
import { useBalance, useDisconnect } from "wagmi";
import connectedStyles from "./Connected.module.css";
import { Button } from "@components/Button";
import { useRefetchBalances } from "@hooks/useRefetchBalances";

interface ConnectedProps {
  address: Address;
}

export const Connected: FC<ConnectedProps> = ({ address }) => {
  const { data: ethBalance } = useBalance({ address });
  const { wEthBalanceFormatted } = useFakeWethBalance(address);
  const { isConfirming, isConfirmed, hash, transferWeth } =
    useFakeWethTransfer();
  const { disconnect } = useDisconnect();
  useRefetchBalances(isConfirmed, isConfirming);

  return (
    <>
      <p>Wallet Address: {address}</p>
      <p>ETH Balance: {ethBalance?.formatted}</p>
      <p>FAKE_WETH Balance: {wEthBalanceFormatted}</p>

      <div className={connectedStyles.row}>
        <Button
          title="Transfer"
          onClick={transferWeth}
          isLoading={isConfirming}
        />
        <Button title="Disconnect" onClick={disconnect} />
      </div>

      {isConfirmed && (
        <>
          <p>Transfer Succeeded!</p>
          <p
            className={connectedStyles.explorerText}
            onClick={() =>
              window.open(`https://holesky.etherscan.io/tx/${hash}`, "_blank")
            }
          >
            View on Explorer
          </p>
        </>
      )}
    </>
  );
};
