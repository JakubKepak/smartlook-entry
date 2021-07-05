import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      backgroundColorRoot: string;
      backgroundColorItem: string;
      backgroundHeader: string;
      fontColorDark: string;
      fontColorLight: string;
      fontColorGrey: string;
      borderDark: string;
      horizontalDivider: string;
    };

    fontWeight: {
      normal: string;
      bold: string;
      extraBold: string;
    };

    fontSize: {
      small: string;
      medium: string;
      large: string;
    };

    boxShadow: string;
    borderRadius: string;
  }
}
