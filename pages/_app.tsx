import type { AppProps } from 'next/app'

import { MantineProvider } from '@mantine/core';
import GlobalStyle from '../components/Mantine/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <GlobalStyle />
      <Component {...pageProps} />
    </MantineProvider>
  );
}

export default MyApp
