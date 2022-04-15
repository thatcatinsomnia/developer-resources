import type { NextPage } from 'next';
import { Stack } from '@mantine/core';
import NavList from '../../components/NavList/NavList';
import useStyles from './sideNavbar.styles';

interface Props {
  className?: string;
}

const SideNavbar: NextPage<Props> = ({ className }) => {
  const { classes, cx } = useStyles();
  
  return (
    <nav className={cx(classes.navbar, className)}>
      <Stack spacing="xs">
        <NavList />
      </Stack>
    </nav>
  );
};

export default SideNavbar;
