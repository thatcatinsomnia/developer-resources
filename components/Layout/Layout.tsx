import type { FC } from 'react';
import { useState } from 'react';
import { MediaQuery } from '@mantine/core';
import useStyles from './layout.styles';
import Header from '../Header/Header';
import MobileNavbar from '../MobileNavbar/MobileNavbar';
import SideNavbar from '../SideNavbar/SideNavbar';

const Layout: FC = ({ children }) => {
  // navigation open state
  const [opened, setOpened] = useState<boolean>(false);
  const { classes } = useStyles();
  
  return (
    <div className={classes.wrapper}>
      <Header setOpened={setOpened}  />
      
      <MediaQuery largerThan="md" styles={{ display: 'none' }}>
        <MobileNavbar opened={opened} setOpened={setOpened} />
      </MediaQuery>

      <div className={classes.main}>
        <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
          <SideNavbar />
        </MediaQuery>

        <div className={classes.content}>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
