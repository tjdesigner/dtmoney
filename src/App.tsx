import React, { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";
import { ButtonOpenApp, Container } from "./styles";

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

  return (
    <TransactionsProvider>
      {IS_MOBILE &&
        // eslint-disable-next-line react/jsx-no-target-blank
        (<Container>
          <ButtonOpenApp href="finor://finor" target="_blank">OPEN APP</ButtonOpenApp>
        </Container>)
      }
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestCLose={handleCloseNewTransactionModal} />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
