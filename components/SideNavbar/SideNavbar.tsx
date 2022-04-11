import type { NextPage } from 'next';
import { Stack, Burger, Text, Overlay, MediaQuery, Button } from '@mantine/core';
import NavItem from '../NavItem/NavItem';
import navs from '../../constants/navs';
import useStyles from './SideNavbar.styles';

interface Props {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  setScrollLocked: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideNavbar: NextPage<Props> = ({ opened, setOpened, setScrollLocked }) => {
  const { classes, cx } = useStyles();

  const closeNav = () => {
    setScrollLocked(false);
    setOpened(false);
  };
  
  return (
    <>
      <Overlay className={cx(classes.overlay, {opened: opened})} color="black" blur={5} zIndex={10} onClick={closeNav} />

      <nav className={cx(classes.navbar, {opened: opened})}>
        <Burger className={classes.closeBurger} size={20} opened={true} onClick={closeNav} />
        
        <Stack spacing="xs">
          {navs.map(nav => (
            <NavItem href={nav.href} key={nav.href}>
              <nav.icon size="22" className={classes.icon} />
              <Text>{nav.name}</Text>
            </NavItem>
          ))}
        </Stack>

        <MediaQuery largerThan="xs" styles={{display: 'none'}}>
          <Button color="violet" className={classes.button}>新增資源</Button>
        </MediaQuery>
      </nav>
    </>
  );
};

export default SideNavbar;
