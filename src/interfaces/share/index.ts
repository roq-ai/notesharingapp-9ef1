import { NoteInterface } from 'interfaces/note';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ShareInterface {
  id?: string;
  note_id: string;
  receiver_id: string;
  sender_id: string;
  created_at?: any;
  updated_at?: any;

  note?: NoteInterface;
  user_share_receiver_idTouser?: UserInterface;
  user_share_sender_idTouser?: UserInterface;
  _count?: {};
}

export interface ShareGetQueryInterface extends GetQueryInterface {
  id?: string;
  note_id?: string;
  receiver_id?: string;
  sender_id?: string;
}
