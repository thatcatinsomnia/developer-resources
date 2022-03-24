import type { NextPage } from "next";
import type Resource from "../interface/Resource";
import Link from 'next/link';
import { Card, Title, Text, Anchor, Button, createStyles } from '@mantine/core';
import { ArrowNarrowRight, FileX } from 'tabler-icons-react';

interface Props {
  resource: Resource
};

const useStyles = createStyles(theme => ({
  card: {
    color: theme.colors.gray[7],
    display: 'flex',
    flexDirection: 'column'
  },

  anchor: {
    display: 'block', 
    marginTop: 'auto'
  },

  rightIcon: {
    marginLeft: '4px'
  }
}));

const ResourceCard: NextPage<Props> = ({ resource }) => {
  const { classes } = useStyles();

  return (
    <Card shadow="sm" px={28} py={28} className={classes.card}>
      <Title order={2} mb={14}>{ resource.name }</Title>
      <Text mb={24}>{ resource.description }</Text>
      <Link href={ resource.url } passHref>
        <Anchor underline={false} className={classes.anchor}>
          <Button fullWidth={true} color="cyan" 
            className={classes.anchor}
            classNames={{ rightIcon: classes.rightIcon }} // tell mantine to use rightIcon class name for right icon in createStyles api
            rightIcon={
              <ArrowNarrowRight size={20} />
            }
          >
            前往
          </Button>
        </Anchor>
      </Link>
    </Card>
  );
};

export default ResourceCard;
