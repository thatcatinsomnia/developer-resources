import { createStyles } from '@mantine/core';

const useStyles = createStyles(theme => ({
  drawer: {
    display: 'flex',
    flexDirection: 'column'
  },
    
  icon: {
    marginRight: '10px'
  },

  button: {
    marginTop: 'auto'
  }
}));

export default useStyles;
