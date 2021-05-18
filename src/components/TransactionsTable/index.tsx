import { useCallback, useEffect, useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions();
  const [dataStorage, setDataStorage] = useState([]);

  useEffect(() => {
    const response = localStorage.getItem("transactions");
    if (response) {
      const res = JSON.parse(response);
      setDataStorage(res);
    }
  }, []);

  function handleDeleteAllTransactions() {
    localStorage.removeItem("transactions");
    window.location.reload();
  }

  const handleDeleteItemTransaction = useCallback((id: string) => {
    var i = dataStorage.findIndex((d:any) => d.id === id)    
    if (i !== -1) {
      dataStorage.splice(i, 1);
      localStorage.setItem("transactions", JSON.stringify(dataStorage));
      window.location.reload();
    }
  }, [dataStorage])

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
              <td className="btn-col">
                <button type="button" onClick={() => handleDeleteItemTransaction(transaction.id)}>
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
