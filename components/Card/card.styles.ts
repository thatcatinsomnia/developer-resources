import { createStyles } from '@mantine/core';

const useStyles = createStyles(theme => ({
  cardWrapper: {
    display: 'flex',
    alignItems: 'stretch'
  },

  card: {
    width: '100%',
    color: theme.colors.gray[7],
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    overflow: 'hidden'
  },

  text: {
    flex: 1,
    minHeight: '120px'
  },

  tagGroup: {
    minHeight: '40px'
  }
}));

export default useStyles;
