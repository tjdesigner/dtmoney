import EventEmitter from "events";
import { useCallback, useEffect, useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions();

  function handleDeleteAllTransactions() {
    localStorage.removeItem("transactions");
    console.log("asdfasdfasdfasdf");
    window.location.reload()
  }

  return (
    <Container>
      <button type="button" onClick={handleDeleteAllTransactions}>
        Limpar lista
      </button>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR").format(
                  new Date(transaction.createdAt)
                )}
              </td>
              <td>
                <button type="button" onClick={() => console.log("ASDFASDF")}>
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
