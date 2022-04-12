import type { NextPage } from 'next';
import type Resource from '../../interface/Resource';
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper';
import Card from '../../components/Card/Card';
import superjson from 'superjson';
import prisma from '../../lib/prisma';

interface Props {
  resources: Resource[];
}

const Fonts: NextPage<Props> = ({ resources }) => {
  return (
    <ContentWrapper>
      {resources.map(resource => <Card resource={resource} key={resource.id} />)}
    </ContentWrapper>
  );
}

export const getServerSideProps = async () => {
  const res = await prisma.resource.findMany({
    include: { 
      category: true,
      tags: true
    },
    where: {
      category: {
        name: 'fonts'
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

export default Fonts;
