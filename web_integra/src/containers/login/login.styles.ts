import styled from '@emotion/styled';
import { toRem } from '../../utils/toRem';

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  text-align: center;
  align-items: center;
  gap: ${toRem(16)};

  width: 100%;
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${toRem(8)};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${toRem(16)};
`;
