import { ShareInterface } from 'interfaces/share';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface NoteInterface {
  id?: string;
  title: string;
  content: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  share?: ShareInterface[];
  user?: UserInterface;
  _count?: {
    share?: number;
  };
}

export interface NoteGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  content?: string;
  user_id?: string;
}
