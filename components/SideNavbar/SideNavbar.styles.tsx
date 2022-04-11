import { createStyles } from '@mantine/core';

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

export default useStyles;
