import { Navbar, Stack } from '@mantine/core';
import NavLink from '../components/NavLink';
import navLinks from '../constants/navLinks';

const AppShellNavbar = () => {
  return (
    <Navbar width={{ base: 180 }} py="xl">
      <Stack spacing="xs">
        {navLinks.map(link => <NavLink href={link.href} key={link.href}>{link.name}</NavLink>)}
      </Stack>
    </Navbar>
  );
};

export default AppShellNavbar;
