import { AppProps } from 'next/app';

import { ThemeProvider } from 'styled-components';

import theme from '../styles/_theme';
import GlobalStyles from '../styles/_global';
import { Header } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
