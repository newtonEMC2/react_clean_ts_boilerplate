import { FETCH_USERS, SET_USERS } from '../types';

export const fetchUsers: any = ():any => ({
  type: FETCH_USERS,
});

export const setUsers: any = ({ payload }: any) => ({
  type: SET_USERS,
  payload,
});
