import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: ${props => props.theme.colors.background};
    --title: ${props => props.theme.colors.title};
    --red: ${props => props.theme.colors.red};
    --white: ${props => props.theme.colors.white};
    --yellow: ${props => props.theme.colors.yellow};

    --default: ${props => props.theme.fontSize.default};
    --large: ${props => props.theme.fontSize.large};

    --regular: ${props => props.theme.fontWeight.regular};
    --semiBold: ${props => props.theme.fontWeight.semiBold}; 
    --bold: ${props => props.theme.fontWeight.bold};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;  //15px (standard 16px)
    }
    @media (max-width: 720px) {
      font-size: 87.5%;   //14px (standard 16px)
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, button, textarea, input {
    font-family: 'Poppins', sans-serif;
    font-weight: var(--regular);
    outline: 0;
  }

  p {
    color: var(--title);
    font-size: var(--default);
    font-weight: var(--regular);
  }

  h1, h2, h3, h4, h5, h6, strong {
    color: var(--title);
    font-weight: var(--semiBold);
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
