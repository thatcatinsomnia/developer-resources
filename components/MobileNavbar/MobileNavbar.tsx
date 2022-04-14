import type { FC, Dispatch, SetStateAction } from 'react';
import { Stack, Burger, Text, Button } from '@mantine/core';
import NavItem from '../NavItem/NavItem';
import useStyles from './mobileNavbar.styles';
import navs from '../../constants/navs';

interface Props {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
  setScrollLocked: Dispatch<SetStateAction<boolean>>;

  // pass from mantine MediaQuery component
  className?: string;
}

const MobileNavbar: FC<Props> = ({ opened, setOpened, setScrollLocked, className }) => {
  const { classes, cx } = useStyles();
  
  const closeNav = () => {
    setScrollLocked(false);
    setOpened(false);
  };

  return (
    <nav className={cx(classes.mobileNavbar, className, { opened: opened })}>
      <Burger className={classes.closeBurger} size={20} opened={true} onClick={closeNav}/>

      <Stack spacing="sm">
        {navs.map(nav => (
          <NavItem href={nav.href} key={nav.href}>
            <nav.icon size="22" className={classes.icon} />
            <Text>{nav.name}</Text>
          </NavItem>
        ))}
      </Stack>

      <Button className={classes.button} href="/new-resource" component="a" color="violet">新增資源</Button>
    </nav>
  );
};

export default MobileNavbar;
