import { createStyles } from '@mantine/core';

const useStyles = createStyles(theme => ({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px'
  }
}));

export default useStyles;
