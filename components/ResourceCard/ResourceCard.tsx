import type { NextPage } from "next";
import type Resource from "../../interface/Resource";
import { Card, Title, Text, Group } from '@mantine/core';
import CardTag from "../CardTag/CardTag";
import useStyles from './ResourceCard.styles';

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
          {resource.tags.map(tag => <CardTag id={tag.id} title={tag.title} key={tag.id} />)}
        </Group>
      </Card>
    </a>
  );
};

export default ResourceCard;
