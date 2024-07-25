import { useForm } from 'react-hook-form';
import dayjs from 'dayjs';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import type {
  AdicionarTransacaoDialogFormValues,
  AdicionarTransacaoDialogProps,
} from './adicionarTransacaoDialog.types';
import { useApp } from '../../../store/app/app';
import { createTransaction } from '../../../api/transactions/transactions';

export const useAdicionarTrasacaoDialog = ({
  setAdicionarTransacao,
  buscarTransacoes,
}: AdicionarTransacaoDialogProps) => {
  const { handleError, setIsLoading, setNotification } = useApp();

  const schema = yup.object({
    titulo: yup.string().required('Titulo é obrigatório'),
    tipo: yup.string().required('Tipo é obrigatório'),
    valor: yup.string().required('Valor é obrigatório'),
    data: yup.string().required('Data é obrigatória'),
  });

  const methods = useForm<AdicionarTransacaoDialogFormValues>({
    resolver: yupResolver(schema),
  });

  const handleClose = () => {
    setAdicionarTransacao({ open: false });
  };

  const handleSubmit = async (data: AdicionarTransacaoDialogFormValues) => {
    setIsLoading(true);

    const value = data.valor.replace(',', '.').replace('R$', '');
    const date = dayjs(data.data).format('YYYY-MM-DD:HH:mm:ss');

    try {
      const response = await createTransaction({
        title: data.titulo,
        type: Number(data.tipo) as 0 | 1,
        value: Number(value),
        date: date,
      });

      if (response.status === 201) {
        setNotification({
          message: 'Transação criada com sucesso',
          options: {
            variant: 'success',
          },
        });
        buscarTransacoes();
        handleClose();
      }

      setIsLoading(false);
    } catch (err) {
      handleError(err);
    }
  };

  return {
    methods,
    handleClose,
    handleSubmit,
  };
};
