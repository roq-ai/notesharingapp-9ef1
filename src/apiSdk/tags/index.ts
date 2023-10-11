import queryString from 'query-string';
import { TagInterface, TagGetQueryInterface } from 'interfaces/tag';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTags = async (query?: TagGetQueryInterface): Promise<PaginatedInterface<TagInterface>> => {
  return fetcher('/api/tags', {}, query);
};

export const createTag = async (tag: TagInterface) => {
  return fetcher('/api/tags', { method: 'POST', body: JSON.stringify(tag) });
};

export const updateTagById = async (id: string, tag: TagInterface) => {
  return fetcher(`/api/tags/${id}`, { method: 'PUT', body: JSON.stringify(tag) });
};

export const getTagById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/tags/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteTagById = async (id: string) => {
  return fetcher(`/api/tags/${id}`, { method: 'DELETE' });
};
