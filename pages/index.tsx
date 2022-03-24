import type { NextPage } from 'next';
import type Resource from '../interface/Resource';
import { Container, SimpleGrid, Title, MediaQuery, createStyles } from '@mantine/core';
import ResourceCard from '../components/ResourceCard';
import superjson from 'superjson';
import prisma from '../lib/prisma';

interface Props {
  resources: Resource[];
}

const useStyles = createStyles(theme => ({
  container: {
    [theme.fn.largerThan('xs')]: { 
      paddingLeft: '40px',
      paddingRight: '40px'
    }
  },

  title: {
    [theme.fn.largerThan('xs')]: {
      textAlign: 'left'
    }
  }
}));

const Home: NextPage<Props> = ({ resources }) => {
  const { classes } = useStyles();

  return (
    <Container px="lg" py="lg" size="xl" className={classes.container}>
      <Title py={24} mb={16} order={2} align="center" className={classes.title}>Developer Resources</Title>
      <SimpleGrid cols={4} spacing="xl"
        breakpoints={[
          { maxWidth: 'lg', cols: 3 },
          { maxWidth: 'md', cols: 2 },
          { maxWidth: 'xs', cols: 1, spacing: 'md' }
        ]}
      >
        {resources.map(resource => <ResourceCard resource={resource} key={resource.id} />)}
      </SimpleGrid>
    </Container>
  );
}

export const getServerSideProps = async () => {
  const res = await prisma.resource.findMany({
    include: { category: true }
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
