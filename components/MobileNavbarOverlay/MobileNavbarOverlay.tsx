import type { FC, Dispatch, SetStateAction } from 'react';
import useStyles from './mobileNavbarOverlay.styles';

interface Props {
  // pass from mantine MediaQuery component
  className?: string;
  opened: boolean;
  setOpened: Dispatch<SetStateAction<boolean>>;
  setScrollLocked: Dispatch<SetStateAction<boolean>>;
}

const MobileNavbarOverlay: FC<Props> = ({ opened, setOpened, setScrollLocked, className }) => {
  const { classes, cx } = useStyles();

  const closeNav = () => {
    setScrollLocked(false);
    setOpened(false);
  };
  
  return <div className={cx(classes.overlay, className, { opened: opened })} onClick={closeNav}></div>;
};

export default MobileNavbarOverlay;
