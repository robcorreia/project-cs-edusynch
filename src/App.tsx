import { ThemeProvider } from 'styled-components';
import theme from './theme/index';
import { Home } from './pages/Home';
import { Header } from './components/Header';
import GlobalStyle from './theme/globalStyles';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { AppRoutes } from './routes';
import { Footer } from './components/Footer';

function App() {
  return (
    <BrowserRouter>

      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Header />
          <AppRoutes />
          <Footer />
          <GlobalStyle />
        </AuthProvider>
      </ThemeProvider>

    </BrowserRouter>
  );
}

export default App;
