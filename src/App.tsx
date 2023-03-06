import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/DefaultTheme';
import { Router } from './Routes';
import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
