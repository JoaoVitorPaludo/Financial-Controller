import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from '@mui/material';
import { deleteTransaction } from '../../../api/transactions/transactions';
import { useApp } from '../../../store/app/app';
import type { ExcluirTransacaoDialogProps } from './excluirTransacaoDialog.types';

export const ExcluirTransacaoDialog = ({
  open,
  id,
  buscarTransacoes,
  setExcluirTransacao,
}: ExcluirTransacaoDialogProps) => {
  const { setIsLoading, setNotification, handleError } = useApp();

  const _handleClose = () => {
    setExcluirTransacao(undefined);
  };

  const _handleExcluir = async () => {
    setIsLoading(true);
    try {
      await deleteTransaction(id);

      setNotification({
        message: 'Transação excluída com sucesso!',
        options: {
          variant: 'success',
        },
      });

      buscarTransacoes();
      _handleClose();
      setIsLoading(false);
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <Dialog open={open} onClose={_handleClose}>
      <DialogTitle>Excluir transação?</DialogTitle>
      <DialogContent>
        <DialogContentText>Você tem certeza que deseja excluir essa transação?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={_handleExcluir} color="error">
          Excluir
        </Button>
        <Button onClick={_handleClose} variant="outlined" color="inherit">
          Cancelar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
