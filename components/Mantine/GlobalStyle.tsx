import type { NextPage } from 'next'
import { Global } from '@mantine/core';

const GlobalStyle = () => {
  return (
    <Global styles={theme => ({
      '*, *::before, *::after': {
        margin: 0,
        boxSizing: 'border-box',
      },

      body: {
        ...theme.fn.fontStyles(),
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[1],
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[8],
        lineHeight: theme.lineHeight,
      }
    })}/>
  );
};

export default GlobalStyle;