import type { NextPage } from 'next';
import useStyles from './ContentWrapper.styles';

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
