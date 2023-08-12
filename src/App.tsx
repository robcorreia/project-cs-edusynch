import { ThemeProvider } from 'styled-components';
import theme from './theme/index';
import { Header } from './components/Header';
import GlobalStyle from './theme/globalStyles';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { AppRoutes } from './routes';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Header />
          <AppRoutes />
          <Footer />
          <GlobalStyle />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
