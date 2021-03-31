import { AppProps } from 'next/app';
import { Provider as NextAuthProvider } from 'next-auth/client';
import { StrictMode } from 'react';

import { ThemeProvider } from 'styled-components';

import theme from '../styles/_theme';
import GlobalStyles from '../styles/_global';
import { Header } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StrictMode>
      <NextAuthProvider session={pageProps.session}>
        <ThemeProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
          <GlobalStyles />
        </ThemeProvider>
      </NextAuthProvider>
    </StrictMode>
  );
}

export default MyApp;
