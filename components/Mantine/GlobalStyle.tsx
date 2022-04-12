import { Global } from '@mantine/core';

const GlobalStyle = () => {
  return (
    <Global styles={theme => ({
      ':root': {
        '--side-nav-width': '260px',
        '--header-height': '76px',
        '--wrapper-max-width': '1600px',
        '--main-bg-color': '#f8f6fa'
      },

      '*, *::before, *::after': {
        margin: 0,
        boxSizing: 'border-box'
      },

      body: {
        ...theme.fn.fontStyles(),
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : 'var(--main-bg-color)',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[8],
        lineHeight: theme.lineHeight
      },

      a: {
        display: 'block',
        textDecoration: 'none'
      }
    })} />
  );
};

export default GlobalStyle;
