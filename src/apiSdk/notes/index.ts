import queryString from 'query-string';
import { NoteInterface, NoteGetQueryInterface } from 'interfaces/note';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getNotes = async (query?: NoteGetQueryInterface): Promise<PaginatedInterface<NoteInterface>> => {
  return fetcher('/api/notes', {}, query);
};

export const createNote = async (note: NoteInterface) => {
  return fetcher('/api/notes', { method: 'POST', body: JSON.stringify(note) });
};

export const updateNoteById = async (id: string, note: NoteInterface) => {
  return fetcher(`/api/notes/${id}`, { method: 'PUT', body: JSON.stringify(note) });
};

export const getNoteById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/notes/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteNoteById = async (id: string) => {
  return fetcher(`/api/notes/${id}`, { method: 'DELETE' });
};
