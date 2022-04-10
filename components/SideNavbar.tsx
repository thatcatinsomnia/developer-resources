import type { NextPage } from 'next';
import { createStyles, Stack, Burger, Text, Overlay, MediaQuery, Button } from '@mantine/core';
import NavItem from './NavItem';
import navs from '../constants/navs';

const useStyles = createStyles(theme => ({
  overlay: {
    display: 'none',
    pointerEvents: 'none',
    transition: 'opacity 200ms ease-out',
    opacity: 0,

    [theme.fn.smallerThan('md')]: {
      display: 'block',

      '&.opened': {
        pointerEvents: 'initial',
        opacity: 1
      }
    }
  },

  navbar: {
    padding: '86px 30px 30px',
    width: 'var(--side-nav-width)',
    position: 'fixed',
    transition: 'transform 200ms ease-out',

    [theme.fn.smallerThan('md')]: {
      backgroundColor: 'white',
      transform: 'translateX(-100%)',
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 100,
      bottom: 0,
      boxShadow: '2px 0 3px -2px rgba(0 0 0 / 6%)'
    },

    '&.opened': {
      transform: 'translateX(0%)',
    }
  },

  closeBurger: {
    display: 'none',
    position: 'absolute',
    top: '18px',
    left: '18px',
    
    [theme.fn.smallerThan('md')]: {
      display: 'block'
    }
  },

  button: {
    marginTop: 'auto',
    width: '100%'
  },
  
  icon: {
    marginRight: '10px'
  }
}));

interface Props {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  setScrollLocked: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideNavbar: NextPage<Props> = ({ opened, setOpened, setScrollLocked }) => {
  const { classes, cx } = useStyles();

  const closeNav = () => {
    setScrollLocked(false);
    setOpened(false);
  };
  
  return (
    <>
      <Overlay className={cx(classes.overlay, {opened: opened})} color="black" blur={5} zIndex={10} onClick={closeNav} />

      <nav className={cx(classes.navbar, {opened: opened})}>
        <Burger className={classes.closeBurger} size={20} opened={true} onClick={closeNav} />
        
        <Stack spacing="xs">
          {navs.map(nav => (
            <NavItem href={nav.href} key={nav.href}>
              <nav.icon size="22" className={classes.icon} />
              <Text>{nav.name}</Text>
            </NavItem>
          ))}
        </Stack>

        <MediaQuery largerThan="xs" styles={{display: 'none'}}>
          <Button color="violet" className={classes.button}>新增資源</Button>
        </MediaQuery>
      </nav>
    </>
  );
};

export default SideNavbar;
