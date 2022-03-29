import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { createStyles, Anchor } from '@mantine/core';

const useStyles = createStyles(theme => ({
  navItem: {
    padding: '10px 28px',
    display: 'block',
    color: theme.colors.gray[6],
    '&:hover': {
      color: theme.colors.gray[8],
      textDecorationLine: 'none',
    },
    '&.active': {
      fontWeight: 'bold',
      color: theme.colors.gray[8],
    }
  }
}));

interface Props {
  href: string,
  children: React.ReactNode
}

const NavLink: NextPage<Props> = ({ href, children }) => {
  const { asPath } = useRouter();
  const { classes } = useStyles();
  
  return (
    <Link href={href} passHref>
      <Anchor className={asPath === href ? `${classes.navItem} active` : classes.navItem}>{children}</Anchor>
    </Link>
  );
};

export default NavLink;
