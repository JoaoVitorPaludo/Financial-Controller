import { MinusCircle } from 'phosphor-react';
import { Typography, Button, useTheme } from '@mui/material';
import dayjs from 'dayjs';

import { TransactionProps } from '../../../api/transactions/transactions.types';
import { ExcluirTransacaoDialogState } from '../excluirTransacaoDialog/excluirTransacaoDialog.types';

interface ItemListagemProps extends TransactionProps {
  setExcluirTransacao: React.Dispatch<
    React.SetStateAction<ExcluirTransacaoDialogState | undefined>
  >;
}

const ItemListagem = ({ id, value, type, date, title, setExcluirTransacao }: ItemListagemProps) => {
  const { palette } = useTheme();

  return (
    <div key={id} style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 6 }}>
        <Typography variant="subtitle1">{title}</Typography>
      </div>
      <div style={{ flex: 2 }}>
        <Typography variant="subtitle1">{type === 0 ? 'Receita' : 'Despesa'}</Typography>
      </div>
      <div style={{ flex: 2 }}>
        <Typography variant="subtitle1">
          {value.toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
          })}
        </Typography>
      </div>
      <div style={{ flex: 2 }}>
        <Typography variant="subtitle1">{dayjs(date).format('DD/MM/YYYY')}</Typography>
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <Button
          variant="text"
          onClick={() =>
            setExcluirTransacao({
              open: true,
              id,
            })
          }
        >
          <MinusCircle size={32} color={palette.error.main} />
        </Button>
      </div>
    </div>
  );
};

export { ItemListagem };
