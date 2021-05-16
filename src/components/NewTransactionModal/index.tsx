import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { useTransactions } from "../../hooks/useTransactions";
import { uuid } from 'uuidv4';

import closeImg from "./../../assets/close.svg";
import incomeImg from "./../../assets/income.svg";
import outcomeImg from "./../../assets/outcome.svg";
import { Container, RadioBox } from "./styles";
import { TrasactionTypeContainer } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestCLose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestCLose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions()
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");
  const [createdAt, setCreatedAt] = useState(new Date());

  async function handleCreateNewTransaction(event: FormEvent) {
    event?.preventDefault();
    
    await createTransaction({
      id: uuid(),
      title,
      amount,
      category,
      type,
      createdAt,
    })

    setTitle('')
    setAmount(0)
    setCategory('')
    setType('deposit')
    setCreatedAt(new Date())
    onRequestCLose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestCLose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestCLose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TrasactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="" />
            <span>Saída</span>
          </RadioBox>
        </TrasactionTypeContainer>

        <input placeholder="Categoria" value={category} onChange={(event) => setCategory(event.target.value)}/>
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
