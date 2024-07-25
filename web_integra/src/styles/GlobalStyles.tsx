import { css, Global } from '@emotion/react';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        * {
          margin: 0;
          padding: 0;

          font-family: 'Inter', sans-serif;
        }

        *::-ms-reveal {
          display: none;
        }
      `}
    />
  );
};

export { GlobalStyles };
