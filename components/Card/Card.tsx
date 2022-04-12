import type { NextPage } from "next";
import type Resource from "../../interface/Resource";
import { Paper, Title, Text, Group } from '@mantine/core';
import CardTag from "../CardTag/CardTag";
import useStyles from './Card.styles';

interface Props {
  resource: Resource
};

const Card: NextPage<Props> = ({ resource }) => {
  const { classes } = useStyles();

  return (
    <a href={resource.url} target="_blank" className={classes.cardWrapper}>
      <Paper p={30} radius="sm" shadow="xs" className={classes.card}>
        <Title order={2} mb={14}>{ resource.name }</Title>
        <Text mb={24} className={classes.text}>{ resource.description }</Text>
        <Group spacing={8} className={classes.tagGroup}>
          {resource.tags.map(tag => <CardTag id={tag.id} title={tag.title} key={tag.id} />)}
        </Group>
      </Paper>
    </a>
  );
};

export default Card;
