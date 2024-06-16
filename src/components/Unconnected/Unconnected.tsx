import { Button } from "@components/Button";
import { useConnect } from "wagmi";

export const Unconnected = () => {
  const { connectors } = useConnect();
  const metamaskConnector = connectors.find(
    (connector) => connector.name === "MetaMask"
  )!;

  return (
    <Button
      title="Connect MetaMask"
      onClick={() => metamaskConnector.connect()}
    />
  );
};
