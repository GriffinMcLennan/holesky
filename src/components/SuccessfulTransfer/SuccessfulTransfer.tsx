import { Address } from "viem";
import successfulTransferStyles from "./SuccessfulTransfer.module.css";
import { FC } from "react";
import { EXPLORER_BASE_URL } from "../../constants";

interface SuccessfulTransferProps {
  hash: Address | undefined;
  isConfirmed: boolean;
}

export const SuccessfulTransfer: FC<SuccessfulTransferProps> = ({
  hash,
  isConfirmed,
}) => {
  if (!isConfirmed) {
    return null;
  }

  return (
    <>
      <p>Transfer Succeeded!</p>
      <p
        className={successfulTransferStyles.explorerText}
        onClick={() => window.open(`${EXPLORER_BASE_URL}${hash}`, "_blank")}
      >
        View on Explorer
      </p>
    </>
  );
};
