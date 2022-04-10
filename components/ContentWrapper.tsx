import type { NextPage } from 'next';
import { createStyles } from '@mantine/core';

const useStyles = createStyles(theme => ({
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '20px'
  }
}));

interface Props {
  children: React.ReactNode;
}

const ContentWrapper: NextPage<Props> = ({ children }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.grid}>
      {children}
    </div>
  );
};

export default ContentWrapper;
