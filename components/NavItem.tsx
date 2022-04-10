import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { createStyles, Anchor } from '@mantine/core';

const useStyles = createStyles(theme => ({
  navItem: {
    padding: '10px 0',
    display: 'flex',
    alignItems: 'center',
    color: theme.colors.gray[5],
    whiteSpace: 'nowrap',
    
    '&:hover': {
      color: theme.colors.gray[8],
      textDecorationLine: 'none',
    },

    '&.active': {
      fontWeight: 'bold',
      color: theme.colors.gray[8]
    }
  }
}));

interface Props {
  href: string;
  children: React.ReactNode;
}

const NavItem: NextPage<Props> = ({ href, children }) => {
  const { asPath } = useRouter();
  const { classes, cx } = useStyles();
  
  return (
    <Link href={href} passHref>
      <Anchor className={cx(classes.navItem, {active: asPath === href})}>
        {children}
      </Anchor>
    </Link>
  );
};

export default NavItem;
