import { Typography } from '@mui/material';
import { CurrencyCircleDollar } from 'phosphor-react';

import { CardContainer, Header } from './card.styles';

interface CardProps {
  title: string;
  icon?: React.ReactNode;
  value: number;
}

export const Card = ({ title, value, icon }: CardProps) => {
  return (
    <CardContainer>
      <Header>
        <Typography variant="body1" color="gray">
          {title}
        </Typography>
        {icon && icon}
      </Header>
      <Typography variant="h5" color="black">
        {value.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </Typography>
    </CardContainer>
  );
};
