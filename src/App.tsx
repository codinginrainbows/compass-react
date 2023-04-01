import { SignInTemplate } from './templates/sign-in';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';
import { Routes, Route } from 'react-router-dom'

import mainTheme from './styles/themes/main';
import { SignUpTemplate } from './templates/sign-up';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<SignInTemplate />} />
        <Route path='/sign-up' element={<SignUpTemplate />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
