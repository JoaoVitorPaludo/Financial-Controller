export interface ExcluirTransacaoDialogState {
  open: boolean;
  id: number;
}

export interface ExcluirTransacaoDialogProps extends ExcluirTransacaoDialogState {
  setExcluirTransacao: React.Dispatch<
    React.SetStateAction<ExcluirTransacaoDialogState | undefined>
  >;
  buscarTransacoes: () => void;
}
