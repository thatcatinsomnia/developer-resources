import { FC, Dispatch, SetStateAction, useEffect } from 'react';
import { useCallback } from 'react';
import Link from 'next/link';
import { Stack, Burger, MediaQuery, Button } from '@mantine/core';
import useStyles from './mobileNavbar.styles';
import NavList from '../NavList/NavList';

interface Props {
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
}

const MobileNavbar: FC<Props> = ({ opened, setOpened }) => {
  const { classes, cx } = useStyles();
  const onClose = useCallback(() => setOpened(false), []);

  useEffect(() => {
    if (opened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [opened]);

  return (
    <>
      <div className={cx(classes.overlay, {opened: opened})} onClick={onClose}></div>

      <nav className={cx(classes.mobileNavbar, { opened: opened })}>
        <Burger className={classes.closeBurger} size={18} opened={true} onClick={onClose}/>

        <Stack spacing="sm">
          <NavList handleClick={onClose} />
        </Stack>

        <Link href="/new-resource" passHref>
          <Button className={classes.button} color="violet" component="a" onClick={onClose}>新增資源</Button>
        </Link>
      </nav>
    </>
  );
};

export default MobileNavbar;
