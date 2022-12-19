import React from "react";
import { useEthers } from "@usedapp/core";
import styles from "./styles";
import { uniswapLogo } from "./assets";
import { WalletButton, Exchange, Loader } from "./components";
import {usePools} from "./hooks/index"

const App = () => {
  const { account } = useEthers();
  const poolsloading = false;

  return (
    <p>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <header className={styles.header}>
            <img
              src={uniswapLogo}
              alt="uniswap logo"
              className="w-16 h-16 object-contain"
            ></img>
            <WalletButton />
          </header>
          <div className={styles.exchangeContainer}>
            <h1 className={styles.headTitle}>Uniswap 2.0</h1>
            <p className={styles.subTitle}>Exchange token in seconds</p>
            <div className={styles.exchangeBoxWrapper}>
              <div className={styles.exchangeBox}>
                <div className="pink_gradient" />
                <div className={styles.exchange}>
                  <p className="text-white">
                    {account ? (
                      poolsloading ? (
                        <Loader title="Loading pools, please wait!" />
                      ) : (
                        <Exchange />
                      )
                    ) : (
                      <Loader title="Please connect your wallet" />
                    )}
                  </p>
                </div>
                <div className="blue_gradient" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </p>
  );
};

export default App;
