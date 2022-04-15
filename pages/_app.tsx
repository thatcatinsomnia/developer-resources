import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';
import GlobalStyle from '../components/Mantine/GlobalStyle';
import Layout from '../components/Layout/Layout';




function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <GlobalStyle />
      
      <Layout>
        <Component {...pageProps} />  
      </Layout>
    </MantineProvider>
  );
}

export default MyApp
