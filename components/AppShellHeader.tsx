import { createStyles, Header, Title } from '@mantine/core';

const useStyles = createStyles(theme => ({
  headerInner: {
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    [theme.fn.largerThan('xs')]: {
      textAlign: 'left'
    }
  }
}));

const AppShellHeader = () => {
  const { classes } = useStyles();

  return (
    <Header height={80}>
      <div className={classes.headerInner}>
        <Title order={2} align="center" px="xl" className={classes.title}>開發者資源</Title>
      </div>
    </Header>
  );
}

export default AppShellHeader;