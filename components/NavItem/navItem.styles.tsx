import { createStyles } from '@mantine/core';

const useStyles = createStyles(theme => ({
  navItem: {
    padding: '10px 0',
    display: 'flex',
    alignItems: 'center',
    color: theme.colors.gray[5],
    whiteSpace: 'nowrap',
    
    '&:hover': {
      color: theme.colors.gray[8],
      textDecorationLine: 'none',
    },

    '&.active': {
      fontWeight: 'bold',
      color: theme.colors.gray[8]
    }
  }
}));

export default useStyles;
