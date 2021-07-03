import { Global, css, useTheme } from '@emotion/react';

export const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: ${theme.colors.backgroundColorRoot};
          font-family: 'Spartan', sans-serif;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        a,
        a:hover {
          text-decoration: none;
          color: inherit;
        }
      `}
    />
  );
};
