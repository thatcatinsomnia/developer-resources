import type { NextPage } from 'next';
import { Stack, Burger, Text, Overlay, MediaQuery, Button } from '@mantine/core';
import NavItem from '../NavItem/NavItem';
import navs from '../../constants/navs';
import useStyles from './sideNavbar.styles';

interface Props {
  className?: string;
}

const SideNavbar: NextPage<Props> = ({ className }) => {
  const { classes, cx } = useStyles();
  
  return (
    <nav className={cx(classes.navbar, className)}>
      <Stack spacing="xs">
        {navs.map(nav => (
          <NavItem href={nav.href} key={nav.href}>
            <nav.icon size="22" className={classes.icon} />
            <Text>{nav.name}</Text>
          </NavItem>
        ))}
      </Stack>
    </nav>
  );
};

export default SideNavbar;
