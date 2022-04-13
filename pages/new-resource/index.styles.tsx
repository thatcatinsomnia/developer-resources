import { createStyles } from '@mantine/core';

const useStyles = createStyles(theme => ({
  form: {
    maxWidth: theme.breakpoints.sm
  },

  input: {
    '&:focus': {
      borderColor: theme.colors.violet[8]
    }
  },

  selected: {
    backgroundColor: theme.colors.violet[4],
    color: theme.colors.violet[0]
  },

  button: {
    width: '100%',
    maxWidth: '160px',

    [theme.fn.smallerThan('xs')]: {
      maxWidth: '100%'
    }
  }
}));

export default useStyles;
