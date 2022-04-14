import { createStyles } from '@mantine/core';

const useStyles = () => createStyles(theme => ({
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
    left: '18px'
  },
    
  icon: {
    marginRight: '10px'
  }
}));

export default useStyles();