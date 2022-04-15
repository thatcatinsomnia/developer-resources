import type { NextPage } from 'next';
import type Resource from '../interface/Resource';
import ContentWrapper from '../components/ContentWrapper/ContentWrapper';
import superjson from 'superjson';
import prisma from '../lib/prisma';
import ResourceList from '../components/ResourceList/ResourceList';

interface Props {
  resources: Resource[];
}

const Home: NextPage<Props> = function Home({ resources }) {
  return (
    <ContentWrapper>
      <ResourceList resources={resources} />
    </ContentWrapper>
  );
};

export const getServerSideProps = async () => {
  const res = await prisma.resource.findMany({
    include: {
      category: true,
      tags: true
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

export default Home;
