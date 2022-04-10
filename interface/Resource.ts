import type Tag from './Tag';

export default interface Resource {
  id: number;
  name: string;
  description: string;
  url: string;
  tags: Tag[];
  created_at: Date;
  updated_at: Date;
}
