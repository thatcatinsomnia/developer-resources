import type { NextPage } from 'next';
import type Resource from '../../interface/Resource';
import SimpleGridWrapper from '../../components/SimpleGridWrapper';
import ResourceCard from '../../components/ResourceCard';
import superjson from 'superjson';
import prisma from '../../lib/prisma';

interface Props {
  resources: Resource[];
}

const Libraries: NextPage<Props> = ({ resources }) => {
  return (
    <SimpleGridWrapper>
      {resources.map(resource => <ResourceCard resource={resource} key={resource.id} />)}
    </SimpleGridWrapper>
  );
}

export const getServerSideProps = async () => {
  const res = await prisma.resource.findMany({
    include: { category: true },
    where: {
      category: {
        name: 'libraries'
      }
    }
  });

  // use superjson to prevent Date Object cant serialized problem in nextjs,
  // check the link: https://github.com/vercel/next.js/issues/11993 
  const { json, meta } = superjson.serialize(res);

  return {
    props: {
      resources: json
    }
  }
};

export default Libraries;
