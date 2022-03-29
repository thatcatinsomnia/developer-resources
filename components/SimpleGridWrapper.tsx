import type { NextPage } from 'next';
import { SimpleGrid } from '@mantine/core';

interface Props {
  children: React.ReactNode
}

const SimpleGridWrapper: NextPage<Props> = ({ children }) => {
  return (
    <SimpleGrid cols={4} spacing="xl"
      breakpoints={[
        { maxWidth: 'lg', cols: 3 },
        { maxWidth: 'md', cols: 2 },
        { maxWidth: 'xs', cols: 1, spacing: 'md' }
      ]}
    >
      {children}
    </SimpleGrid>
  );
};

export default SimpleGridWrapper;