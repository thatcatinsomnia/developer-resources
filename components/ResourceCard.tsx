import type { NextPage } from "next";
import type Resource from "../interface/Resource";
import Link from 'next/link';
import { Card, Title, Text, Anchor, Button } from '@mantine/core';
import { ArrowNarrowRight, FileX } from 'tabler-icons-react';

interface Props {
  resource: Resource
};

const ResourceCard: NextPage<Props> = ({ resource }) => {
  // 
  return (
    <Card shadow="sm" px={28} py={28} sx={theme => ({ 
      color: theme.colors.gray[7],
      display: 'flex',
      flexDirection: 'column'
    })}>
      <Title order={2} mb={14}>{ resource.name }</Title>
      <Text mb={24}>{ resource.description }</Text>
      <Link href={ resource.url } passHref>
        <Anchor underline={false} sx={theme => ({ display: 'block', marginTop: 'auto' })}>
          <Button fullWidth={true} color="cyan"
            styles={theme => ({
              rightIcon: {
                marginLeft: "4px"
              }
            })}
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
