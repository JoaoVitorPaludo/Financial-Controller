import { toRem } from './../../../utils/toRem';
import styled from '@emotion/styled';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${toRem(16)};

  padding: ${toRem(24)};
  background-color: white;
  border-radius: ${toRem(8)};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);

  width: 200px;
  min-width: 200px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
