import { createStyles } from '@mantine/core';

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
    marginRight: 'auto',
    display: 'flex',
    flexDirection: 'column',
    fontSize: '20px',
    fontWeight: 'bold',
    fontFamily: 'inherit',
    lineHeight: 1.1
  },

  button: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none'
    }
  }
}));

export default useStyles;
