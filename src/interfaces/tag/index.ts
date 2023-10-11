import { GetQueryInterface } from 'interfaces';

export interface TagInterface {
  id?: string;
  name: string;
  created_at?: any;
  updated_at?: any;

  _count?: {};
}

export interface TagGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
}
