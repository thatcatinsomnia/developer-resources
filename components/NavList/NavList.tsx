import type { ComponentType, FC } from 'react';
import { Text } from '@mantine/core';
import useStyles from './navList.styles';
import NavItem from '../NavItem/NavItem';
import navs from '../../constants/navs';

interface Props {
  handleClick?: () => void;
}

const NavList: FC<Props> = ({ handleClick }) => {
  const { classes } = useStyles();

  return (
    <>
      {navs.map(nav => (
        <NavItem href={nav.href} key={nav.href} handleClick={handleClick}>
          <nav.icon size="22" className={classes.icon} />
          <Text>{nav.name}</Text>
        </NavItem>
      ))}
    </>
  );
};

export default NavList;
