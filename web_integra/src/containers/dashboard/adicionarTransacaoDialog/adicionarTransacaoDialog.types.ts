export interface AdicionarTransacaoDialogState {
  open: boolean;
}

export interface AdicionarTransacaoDialogProps extends AdicionarTransacaoDialogState {
  setAdicionarTransacao: React.Dispatch<
    React.SetStateAction<AdicionarTransacaoDialogState | undefined>
  >;
  buscarTransacoes: () => void;
}

export interface AdicionarTransacaoDialogFormValues {
  titulo: string;
  tipo: 0 | 1;
  valor: string;
  data: string;
}
