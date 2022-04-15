import type { FC, Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { Stack, Text, Button, Drawer, Burger } from '@mantine/core';
import NavItem from '../NavItem/NavItem';
import useStyles from './mobileNavbar.styles';
import navs from '../../constants/navs';

interface Props {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
}

const MobileNavbar: FC<Props> = ({ opened, setOpened }) => {
  const { classes } = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      opened={opened}
      onClose={() => setOpened(false)}
      lockScroll={opened}
      padding="xl"
      size="sm"
      transitionDuration={200}
      aria-describedby="mobile nav"
      closeButtonLabel="close mobile nav"
    >
      <Stack mt={40} spacing="sm">
        {navs.map(nav => (
          <NavItem href={nav.href} key={nav.href} onClickMobileNav={() => setOpened(false)}>
            <nav.icon size="22" className={classes.icon} />
            <Text>{nav.name}</Text>
          </NavItem>
        ))}
      </Stack>
      
      <Link href="/new-resource">
        <Button className={classes.button}  component="a" color="violet" onClick={() => setOpened(false)}>新增資源</Button>
      </Link>
    </Drawer>
  );
};

export default MobileNavbar;
