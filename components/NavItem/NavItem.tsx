import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Anchor } from '@mantine/core';
import useStyles from './navItem.styles';

interface Props {
  href: string;
  handleClick?: () => void;
  children: React.ReactNode;
}

const NavItem: NextPage<Props> = ({ href, handleClick, children }) => {
  const { asPath } = useRouter();
  const { classes, cx } = useStyles();
  
  return (
    <Link href={href} passHref>
      <Anchor className={cx(classes.navItem, {active: asPath === href})} onClick={handleClick}>
        {children}
      </Anchor>
    </Link>
  );
};

export default NavItem;
