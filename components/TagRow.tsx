import type { NextPage } from 'next';
import { Box, Badge } from '@mantine/core';

interface Tags {
  tags?: string[];
}

const TagRow: NextPage<Tags> = ({ tags }) => {
  return (
    <Box>
      {tags && tags.map(tag => <Badge mr={8} color="indigo" size="md" radius="sm">{tag}</Badge>)}
    </Box>
  );
};

export default TagRow;
