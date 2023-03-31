import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: numbering,

    colors: {
      background: string,

      title: string,

      red: string,
      white: string,
      yellow: string,
    }

    fontSize: {
        default: string,
        large: string,
    },

    fontWeight: {
        regular: number,
        semiBold: number,
        bold: number,
    },
  }
}