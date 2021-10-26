import React, { useState } from "react";
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

  return (
    <TransactionsProvider>

      {/* {IS_MOBILE && <a href='finor://finor'>OPEN APP</a>} */}
      {IS_MOBILE &&
        <a href="https://finor.netlify.app" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://finor.netlify.app&amp;source=gmail&amp;ust=1635363030184000&amp;usg=AFQjCNFCfLE-rT_kPMYTbn6U0ZcIAQmaUw">https://finor.netlify.app</a>}
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestCLose={handleCloseNewTransactionModal} />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
