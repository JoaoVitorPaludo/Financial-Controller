import { useState, useEffect, useMemo } from 'react';

import { logout } from '../../api/authentication/authentication';
import { listTransactions } from '../../api/transactions/transactions';
import { TransactionProps } from '../../api/transactions/transactions.types';
import { useApp } from '../../store/app/app';
import { useAuth } from '../../store/auth/auth';
import { AdicionarTransacaoDialogState } from './adicionarTransacaoDialog/adicionarTransacaoDialog.types';
import { ExcluirTransacaoDialogState } from './excluirTransacaoDialog/excluirTransacaoDialog.types';

const useDashboard = () => {
  const { setIsLoading, handleError } = useApp();
  const { clearStore } = useAuth();

  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  const [excluirTransacao, setExcluirTransacao] = useState<ExcluirTransacaoDialogState>();
  const [adicionarTransacao, setAdicionarTransacao] = useState<AdicionarTransacaoDialogState>();

  const valorDespesas = useMemo(() => {
    return transactions.reduce((acc, transaction) => {
      if (transaction.type === 1) {
        return acc + transaction.value;
      }

      return acc;
    }, 0);
  }, [transactions]);

  const valorReceitas = useMemo(() => {
    return transactions.reduce((acc, transaction) => {
      if (transaction.type === 0) {
        return acc + transaction.value;
      }

      return acc;
    }, 0);
  }, [transactions]);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      await logout();
      clearStore();
    } catch (err) {
      handleError(err);
      clearStore();
    }
    setIsLoading(false);
  };

  const buscarTransacoes = async () => {
    try {
      const { data } = await listTransactions();

      if (data) {
        setTransactions(data);
      }
    } catch (err) {
      handleError(err);
    }
  };

  useEffect(() => {
    buscarTransacoes();
  }, []);

  return {
    handleLogout,
    transactions,
    valorDespesas,
    valorReceitas,
    excluirTransacao,
    adicionarTransacao,
    setExcluirTransacao,
    setAdicionarTransacao,
    buscarTransacoes,
  };
};

export { useDashboard };
