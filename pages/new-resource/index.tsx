import type { NextPage, GetServerSideProps } from 'next';
import { Title, Stack, TextInput, Select, Textarea, Button } from '@mantine/core';
import useStyles from './index.styles';
import prisma from '../../lib/prisma';

interface Props {
  categories: {
    value: string;
    label: string;
  }[]
}

const NewResource: NextPage<Props> = ({ categories }) => {
  const { classes } = useStyles();

  return (
    <form className={classes.form}>
      <Title mb={40} order={3}>請求新資源</Title>

      <Stack spacing="sm">
        <TextInput
          classNames={{ input: classes.input }}
          placeholder="URL"
          label="URL"
        />

        <Select
          classNames={{ input: classes.input, selected: classes.selected }}
          label="分類"
          placeholder="請選擇一項分類"
          data={categories}
        />

        <Textarea
          classNames={{ input: classes.input }}
          label="描述"
          placeholder="簡易描述該資源"
          minRows={12}
        />
        
        <Button mt={20} color="violet" className={classes.button}>送出</Button>
      </Stack>
    </form>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await prisma.category.findMany({
    select: {
      id: true,
      display_name: true
    }
  });
  
  // map the data for mantine Select component
  const categories = res.map(category => {
    return {
      label: category.display_name,
      value: category.id
    }
  });
  
  return {
    props: {
      categories
    }
  }
}

export default NewResource;
