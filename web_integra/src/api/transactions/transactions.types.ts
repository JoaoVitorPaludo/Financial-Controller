export interface CreateTransactionProps {
  title: string;
  value: number;
  /**
   * 0 - Receita
   * 1 - Despesa
   */
  type: 0 | 1;
  date: string;
}

export interface TransactionProps {
  id: number;
  title: string;
  value: number;
  type: 0 | 1;
  date: string;
}
