import type { NextPage } from 'next';
import Link from 'next/link';
import { Burger, MediaQuery, Button } from '@mantine/core';
import useStyles from './header.styles';

interface Props {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: NextPage<Props> = ({ setOpened }) => {
  const { classes } = useStyles();

  return (
    <header className={classes.header}>
      <div className={classes.headerInner}>
        <MediaQuery largerThan="md" styles={{ display: 'none' }}>
          <Burger opened={false} size={20} mr={20} onClick={() => setOpened(true)} />
        </MediaQuery>

        <div className={classes.titleBox}>
          <span>Developer</span>
          <span>Resources</span>
        </div>
        
        <Link href="/new-resource" passHref>
          <Button className={classes.button} color="violet" component="a">新增資源</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
