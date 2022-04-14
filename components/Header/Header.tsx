import type { NextPage } from 'next';
import { Button, Burger, MediaQuery } from '@mantine/core';
import useStyles from './header.styles';

interface Props {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  setScrollLocked: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: NextPage<Props> = ({ opened, setOpened, setScrollLocked }) => {
  const { classes } = useStyles();
  
  const openNav = () => {
    setScrollLocked(true);
    setOpened(true);
  };

  return (
    <header className={classes.header}>
      <div className={classes.headerInner}>
        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
          <Burger opened={false} size={20} mr={20} onClick={openNav} />
        </MediaQuery>

        <div className={classes.titleBox}>
          <span>Developer</span>
          <span>Resources</span>
        </div>

        <MediaQuery smallerThan="xs" styles={{ display: 'none' }}>
          <Button href="/new-resource" color="violet" component="a" className={classes.button}>新增資源</Button>
        </MediaQuery>
      </div>
    </header>
  );
};

export default Header;
