import { createStyles } from '@mantine/core';

const useStyles = createStyles(theme => ({
  wrapper: {
    backgroundColor: 'var(--main-bg-color)'
  },

  main: {
    margin: '0 auto',
    maxWidth: 'var(--wrapper-max-width)',
    minHeight: `calc(100vh - var(--header-height))`
  },

  content: {
    marginLeft: 'var(--side-nav-width)',
    padding: '40px 20px',

    [theme.fn.smallerThan('md')]: {
      '--side-nav-width': 0,
      padding: '40px 30px'
    }
  }
}));

export default useStyles;
