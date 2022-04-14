import { createStyles } from '@mantine/core';

const useStyles = createStyles(theme => ({
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'rgba(0 0 0 / 80%)',
    opacity: 0,
    pointerEvents: 'none',
    zIndex: 90,
    transition: 'opacity 200ms ease-out',
    backdropFilter: 'blur(5px)',

    '&.opened': {
      opacity: 1,
      pointerEvents: 'auto'
    }
  }
}));

export default useStyles;
