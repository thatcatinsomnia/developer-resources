import type { AppProps } from 'next/app'
import { createStyles, MantineProvider, AppShell, SimpleGrid } from '@mantine/core';
import GlobalStyle from '../components/Mantine/GlobalStyle';
import AppShellHeader from '../components/AppShellHeader';
import AppShellNavbar from '../components/AppShellNavbar';

const useStyles = createStyles(theme => ({
  main: {
    padding: '20px'
  }
}));

function MyApp({ Component, pageProps }: AppProps) {
  const { classes } = useStyles();

  return (
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <GlobalStyle />
      <AppShell
        fixed
        header={<AppShellHeader />}
        navbar={<AppShellNavbar />}
      >
        <div className={classes.main}>
          <Component {...pageProps} />
        </div>
      </AppShell>
    </MantineProvider>
  );
}

export default MyApp
