import { SignUpTemplate } from './templates/sign-in';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';

import mainTheme from './styles/themes/main';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <SignUpTemplate />
    </ThemeProvider>
  );
}

export default App;
