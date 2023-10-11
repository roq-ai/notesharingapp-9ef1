import queryString from 'query-string';
import { ShareInterface, ShareGetQueryInterface } from 'interfaces/share';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getShares = async (query?: ShareGetQueryInterface): Promise<PaginatedInterface<ShareInterface>> => {
  return fetcher('/api/shares', {}, query);
};

export const createShare = async (share: ShareInterface) => {
  return fetcher('/api/shares', { method: 'POST', body: JSON.stringify(share) });
};

export const updateShareById = async (id: string, share: ShareInterface) => {
  return fetcher(`/api/shares/${id}`, { method: 'PUT', body: JSON.stringify(share) });
};

export const getShareById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/shares/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteShareById = async (id: string) => {
  return fetcher(`/api/shares/${id}`, { method: 'DELETE' });
};
