import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './styles/global';

import mainTheme from './styles/themes/main';

import { AppRoutes } from './routes';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyle />
      <ToastContainer />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
