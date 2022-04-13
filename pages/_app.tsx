import type { AppProps } from 'next/app';
import { useState } from 'react';
import { MantineProvider } from '@mantine/core';
import { useScrollLock } from '@mantine/hooks';
import useStyles from './_app.styles';
import GlobalStyle from '../components/Mantine/GlobalStyle';
import Header from '../components/Header/Header';
import SideNavbar from '../components/SideNavbar/SideNavbar';

function MyApp({ Component, pageProps }: AppProps) {
  // navigation open state
  const [opened, setOpened] = useState<boolean>(false);
  const { classes } = useStyles();
  const [scrollLocked, setScrollLocked] = useScrollLock();

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
