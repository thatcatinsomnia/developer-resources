import type { NextPage } from 'next';
import { createStyles, Button, Burger, MediaQuery } from '@mantine/core';

const useStyles = createStyles(theme => ({
  header: {
    height: 'var(--header-height)',
    backgroundColor: 'var(--main-bg-color)',
    position: 'sticky',
    top: 0,
    zIndex: 1,
    boxShadow: '0 2px 3px -2px rgba(0 0 0 / 6%)'
  },

  headerInner: {
    margin: '0 auto',
    padding: '0 30px',
    width: '100%',
    maxWidth: 'var(--wrapper-max-width)',
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  },

  titleBox: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamily: 'inherit',
    lineHeight: 1.1
  },

  button: {
    marginLeft: 'auto'
  }
}));

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
        <MediaQuery largerThan="md" styles={{display: 'none'}}>
          <Burger opened={opened} size={20} mr={20} onClick={openNav} />
        </MediaQuery>

        <div className={classes.titleBox}>
          <span>Developer</span>
          <span>Resources</span>
        </div>

        <MediaQuery smallerThan="xs" styles={{display: 'none'}}>
          <Button color="violet" className={classes.button}>新增資源</Button>
        </MediaQuery>
      </div>
    </header>
  );
};

export default Header;
