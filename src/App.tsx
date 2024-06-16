import { useAccount } from "wagmi";
import styles from "@theme/Theme.module.css";
import { Unconnected } from "@components/Unconnected";
import { Connected } from "@components/Connected";

function App() {
  const { address, status } = useAccount();

  return (
    <div className={styles.container}>
      {status === "connected" ? (
        <Connected address={address} />
      ) : (
        <Unconnected />
      )}
    </div>
  );
}

export default App;
