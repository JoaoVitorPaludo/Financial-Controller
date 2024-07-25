import { api, makeHeaders } from '../api';
import { urls } from '../urls';
import { CreateTransactionProps } from './transactions.types';

export const listTransactions = async () =>
  await api.get(urls.transactions, {
    headers: makeHeaders(),
  });

export const createTransaction = async (data: CreateTransactionProps) =>
  await api.post(`${urls.transactions}/create`, data, {
    headers: makeHeaders(),
  });

export const deleteTransaction = async (id: number) =>
  await api.delete(`${urls.transactions}/delete`, { data: { id }, headers: makeHeaders() });
