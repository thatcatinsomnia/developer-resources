import { createStyles } from '@mantine/core';

const useStyles = createStyles(theme => ({
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgb(9 5 12 / 0.8)',
    zIndex: 90,
    opacity: 0,
    backdropFilter: 'blur(5px)',
    pointerEvents: 'none',
    transition: 'opacity 160ms ease-out',

    '&.opened': {
      opacity: 1,
      pointerEvents: 'auto'
    }
  },

  mobileNavbar: {
    padding: '86px 30px 30px',
    width: 'var(--side-nav-width)',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    zIndex: 100,
    boxShadow: '2px 0 3px -2px rgba(0 0 0 / 6%)',
    transform: 'translate(-100%)',
    transition: `transform 200ms ease-out`,
    pointerEvents: 'none',

    '&.opened': {
      transform: 'translate(0%)',
      pointerEvents: 'auto',
    }
  },

  closeBurger: {
    position: 'absolute',
    top: '18px',
    right: '18px'
  },

  icon: {
    marginRight: '10px'
  },

  button: {
    marginTop: '64px',

    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  }
}));

export default useStyles;
