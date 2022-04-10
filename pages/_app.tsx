import type { AppProps } from 'next/app';
import { useState } from 'react';
import { MantineProvider, createStyles } from '@mantine/core';
import { useScrollLock } from '@mantine/hooks';
import GlobalStyle from '../components/Mantine/GlobalStyle';
import Header from '../components/Header';
import SideNavbar from '../components/SideNavbar';

const useStyles = createStyles(theme => ({
  wrapper: {
    backgroundColor: 'var(--main-bg-color)'
  },

  main: {
    margin: '0 auto',
    maxWidth: 'var(--wrapper-max-width)',
    minHeight: `calc(100vh - var(--header-height))`
  },

  content: {
    marginLeft: 'var(--side-nav-width)',
    padding: '40px 20px',

    [theme.fn.smallerThan('md')]: {
      '--side-nav-width': 0
    }
  }
}));

function MyApp({ Component, pageProps }: AppProps) {
  // navigation open state
  const [opened, setOpened] = useState<boolean>(false);
  const { classes } = useStyles();
  const [scrollLocked, setScrollLocked] = useScrollLock();
  // const matchLargeScreen = useMediaQuery(`(min-width: ${theme.breakpoints.md}px)`);

  return (
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <GlobalStyle />

      <div className={classes.wrapper}>
        <Header opened={opened} setOpened={setOpened} setScrollLocked={setScrollLocked} />
        
        <div className={classes.main}>
          <SideNavbar opened={opened} setOpened={setOpened} setScrollLocked={setScrollLocked} />

          <div className={classes.content}>
            <Component {...pageProps} />
          </div>
        </div>
      </div>

    </MantineProvider>
  );
}

export default MyApp
