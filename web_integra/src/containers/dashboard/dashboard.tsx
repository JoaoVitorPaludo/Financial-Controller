import { AppBar, Typography, useTheme, Button } from '@mui/material';
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar, Plus, SignOut } from 'phosphor-react';
import { AdicionarTransacaoDialog } from './adicionarTransacaoDialog/adicionarTransacaoDialog';
import { Card } from './card/card';

import {
  AppBarContainer,
  BodyListagem,
  CardContainer,
  DashboardContainer,
  HeaderListagem,
  ListagemContainer,
  LogoutButton,
} from './dashboard.styles';
import { ExcluirTransacaoDialog } from './excluirTransacaoDialog/excluirTransacaoDialog';
import { ItemListagem } from './itemListagem/itemListagem';
import { useDashboard } from './useDashboard';

const Dashboard = () => {
  const {
    transactions,
    valorDespesas,
    valorReceitas,
    excluirTransacao,
    adicionarTransacao,
    setExcluirTransacao,
    setAdicionarTransacao,
    handleLogout,
    buscarTransacoes,
  } = useDashboard();
  const { palette } = useTheme();

  return (
    <DashboardContainer>
      <AppBar position="static">
        <AppBarContainer>
          <Typography variant="h5" fontWeight={600}>
            DataIntegra Finance
          </Typography>
          <LogoutButton onClick={handleLogout}>
            <SignOut size={32} />
          </LogoutButton>
        </AppBarContainer>
      </AppBar>
      <CardContainer>
        <Card
          title="Receita"
          value={valorReceitas || 0}
          icon={<ArrowCircleUp size={32} color={palette.success.main} />}
        />
        <Card
          title="Despesa"
          value={valorDespesas || 0}
          icon={<ArrowCircleDown size={32} color={palette.error.main} />}
        />
        <Card
          title="Total"
          value={(valorReceitas || 0) - (valorDespesas || 0)}
          icon={<CurrencyDollar size={32} />}
        />
      </CardContainer>
      <ListagemContainer>
        <div>
          <Button
            startIcon={<Plus size={14} weight="bold" />}
            onClick={() => {
              setAdicionarTransacao({ open: true });
            }}
          >
            Nova transação
          </Button>
        </div>
        <HeaderListagem>
          <div style={{ flex: 6 }}>
            <Typography variant="subtitle1">Titulo</Typography>
          </div>
          <div style={{ flex: 2 }}>
            <Typography variant="subtitle1">Tipo</Typography>
          </div>
          <div style={{ flex: 2 }}>
            <Typography variant="subtitle1">Valor</Typography>
          </div>
          <div style={{ flex: 2 }}>
            <Typography variant="subtitle1">Data</Typography>
          </div>
          <div style={{ flex: 1 }}>
            <Typography variant="subtitle1">Ações</Typography>
          </div>
        </HeaderListagem>
        <BodyListagem>
          {transactions?.map((transaction) => (
            <ItemListagem
              key={transaction.id}
              {...transaction}
              setExcluirTransacao={setExcluirTransacao}
            />
          ))}
        </BodyListagem>
      </ListagemContainer>
      {excluirTransacao?.open && (
        <ExcluirTransacaoDialog
          open={excluirTransacao.open}
          id={excluirTransacao.id}
          buscarTransacoes={buscarTransacoes}
          setExcluirTransacao={setExcluirTransacao}
        />
      )}
      {adicionarTransacao?.open && (
        <AdicionarTransacaoDialog
          open={adicionarTransacao.open}
          buscarTransacoes={buscarTransacoes}
          setAdicionarTransacao={setAdicionarTransacao}
        />
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
