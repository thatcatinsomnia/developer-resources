import type { NextPage } from "next";
import type Resource from "../interface/Resource";
import { Card, Title, Text, createStyles, Group } from '@mantine/core';
import ResourceCardTag from "./ResourceCardTag";

const useStyles = createStyles(theme => ({
  cardWrapper: {
    display: 'flex',
    alignItems: 'stretch'
  },

  card: {
    width: '100%',
    color: theme.colors.gray[7],
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 0 3px -2px rgba(0 0 0 / 13%)',
    cursor: 'pointer',
    overflow: 'hidden'
  },

  text: {
    flex: 1,
    minHeight: '120px'
  },

  tagGroup: {
    minHeight: '40px'
  }
}));

interface Props {
  resource: Resource
};

const ResourceCard: NextPage<Props> = ({ resource }) => {
  const { classes } = useStyles();

  return (
    <a href={resource.url} target="_blank" className={classes.cardWrapper}>
      <Card p={30} className={classes.card} radius="sm">
        <Title order={2} mb={14}>{ resource.name }</Title>
        <Text mb={24} className={classes.text}>{ resource.description }</Text>
        <Group spacing={8} className={classes.tagGroup}>
          {resource.tags.map(tag => <ResourceCardTag id={tag.id} title={tag.title} key={tag.id} />)}
        </Group>
      </Card>
    </a>
  );
};

export default ResourceCard;
