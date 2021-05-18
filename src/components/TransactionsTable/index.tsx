import { useCallback, useEffect, useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransactions();
  const [dataStorage, setDataStorage] = useState()

  function handleDeleteAllTransactions() {
    localStorage.removeItem("transactions");
    window.location.reload();
  }

  function handleDeleteItemTransaction(id: string) {
    console.log(id);
    loadData()
  }

  const loadData = useCallback(async () => {
    const response = await localStorage.getItem('transactions')
    if(response) {
      setDataStorage(JSON.parse(response))
      console.log(dataStorage);
    }
  },[dataStorage])


  useEffect(() => {
    localStorage.getItem('transactions')
  }, [])

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
