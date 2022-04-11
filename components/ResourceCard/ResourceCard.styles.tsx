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
    boxShadow: '0 0 3px -2px rgba(0 0 0 / 13%)',
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
