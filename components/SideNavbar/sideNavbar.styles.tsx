import { createStyles } from '@mantine/core';

const useStyles = createStyles(theme => ({
  navbar: {
    padding: '86px 30px 30px',
    width: 'var(--side-nav-width)',
    position: 'fixed'
  },

  icon: {
    marginRight: '10px'
  }
}));

export default useStyles;
