import { Typography } from '@mui/material';
import { CurrencyCircleDollar } from 'phosphor-react';
import { useForm, FormProvider } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Form, Header, LoginContainer } from './login.styles';
import { LoginFormValues } from './login.types';
import { Fields } from './flelds/fields';
import useLogin from './useLogin';

const Login = () => {
  const schema = yup.object({
    email: yup.string().email('Email inválido').required('Email obrigatório'),
    password: yup.string().required('Senha obrigatória'),
  });

  const { handleLogin, methods } = useLogin();

  return (
    <LoginContainer>
      <Header>
        <CurrencyCircleDollar size={64} />
        <div>
          <Typography variant="h4" fontWeight={700}>
            Data Integra Finance
          </Typography>
          <Typography variant="subtitle1">Faça login e começe a usar</Typography>
        </div>
      </Header>
      <FormProvider {...methods}>
        <Form onSubmit={handleLogin}>
          <Fields />
        </Form>
      </FormProvider>
    </LoginContainer>
  );
};

export default Login;
