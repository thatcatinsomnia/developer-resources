import type { AppProps } from 'next/app';
import { useState } from 'react';
import { MantineProvider, MediaQuery } from '@mantine/core';
import { useScrollLock } from '@mantine/hooks';
import useStyles from '../styles/_app.styles';
import GlobalStyle from '../components/Mantine/GlobalStyle';
import Header from '../components/Header/Header';
import MobileNavbar from '../components/MobileNavbar/MobileNavbar';
import MobileNavbarOverlay from '../components/MobileNavbarOverlay/MobileNavbarOverlay';
import SideNavbar from '../components/SideNavbar/SideNavbar';

function MyApp({ Component, pageProps }: AppProps) {
  const { classes } = useStyles();

  // navigation open state
  const [opened, setOpened] = useState<boolean>(false);
  const [scrollLocked, setScrollLocked] = useScrollLock();

  return (
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <GlobalStyle />

      <div className={classes.wrapper}>
        <Header opened={opened} setOpened={setOpened} setScrollLocked={setScrollLocked} />
        
        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
          <>
            <MobileNavbar opened={opened} setOpened={setOpened} setScrollLocked={setScrollLocked} />
            <MobileNavbarOverlay opened={opened} setOpened={setOpened} setScrollLocked={setScrollLocked} />
          </>
        </MediaQuery>

        <div className={classes.main}>
          <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
            <SideNavbar />
          </MediaQuery>

          <div className={classes.content}>
            <Component {...pageProps} />
          </div>
        </div>
      </div>

    </MantineProvider>
  );
}

export default MyApp
