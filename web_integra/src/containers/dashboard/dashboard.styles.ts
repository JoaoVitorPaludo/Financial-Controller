import styled from '@emotion/styled';
import { toRem } from '../../utils/toRem';

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 24px;
`;

export const AppBarContainer = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100% - ${toRem(32)});
  padding: ${toRem(16)};
  position: relative;
`;

export const LogoutButton = styled.button`
  max-width: 100px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: #ffffff;
  transition: color 0.3s ease-in-out;
  position: absolute;
  right: ${toRem(16)};

  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
    transition: color 0.3s ease-in-out;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  width: calc(100% - ${toRem(16)});
  max-width: 800px;
  gap: ${toRem(24)};
  flex-wrap: wrap;
  justify-content: center;
  padding: ${toRem(8)};
`;
export const ListagemContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: calc(100% - ${toRem(32)});
  max-width: 800px;
  padding: ${toRem(8)};
  gap: ${toRem(16)};
`;

export const HeaderListagem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: ${toRem(8)} ${toRem(16)};
  border-radius: ${toRem(8)};
  background-color: ${({ theme }) => theme.palette.background.paper};
`;

export const BodyListagem = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${toRem(8)};

  > div {
    display: flex;
    background-color: ${({ theme }) => theme.palette.background.paper};

    padding: ${toRem(16)} ${toRem(16)};
    border-radius: ${toRem(8)};
  }
`;
