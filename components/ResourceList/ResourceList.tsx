import type { FC } from 'react';
import type Resource from '../../interface/Resource';
import Card from '../Card/Card';

interface Props {
  resources: Resource[]
}

const ResourceList: FC<Props> = ({ resources }) => {
  return (
    <>
      { resources.map(resource => <Card resource={resource} key={resource.id} />) }
    </>
  );
};

export default ResourceList;
