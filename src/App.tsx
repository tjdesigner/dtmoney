import React, { useCallback, useEffect, useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root')

const IS_MOBILE = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

if (IS_MOBILE) {
  // true for mobile device
  console.log("mobile device")
} else {
  // false for not mobile device
  console.log("not mobile device")
}


export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }


  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  // const fallbackToStore = () => {
  //   window.location.replace('market://details?id=com.example.deeplink');
  // };
  // const openApp = () => {
  //   window.location.replace('finor://finor');
  // };
  // const triggerAppOpen = () => {
  //   openApp();
  //   console.log("AQUI")
  // };

  const openApp = useCallback(() => {
    const someLink = document.querySelector('a');
    someLink?.click()
  }, []);

  useEffect(() => {
    openApp()
  }, [])

  return (
    <TransactionsProvider>
      {/* {IS_MOBILE && <a href='finor://finor'>OPEN APP</a>} */}
      {IS_MOBILE &&
        // eslint-disable-next-line react/jsx-no-target-blank
        <a href="https://finor.netlify.app" target="_blank">OPEN APP</a>}
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestCLose={handleCloseNewTransactionModal} />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
