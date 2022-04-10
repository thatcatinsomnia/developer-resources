import type { NextPage } from 'next';
import type Tag from '../interface/Tag';
import { Badge } from '@mantine/core';

const ResourceCardTag: NextPage<Tag> = ({ title }) => {
  return (
    <Badge radius="sm" color="violet">{ title }</Badge>
  );
};

export default ResourceCardTag;
