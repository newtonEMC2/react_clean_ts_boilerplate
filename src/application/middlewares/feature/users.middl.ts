import {
  FETCH_USERS, FETCH_USERS_SUCCESS, USERS_ERROR,
} from '../../types';

import { apiRequest } from '../../actions/api.action';
import { setUsers } from '../../actions/users.action';

import { UsersDao } from '../../../infrastructure/http/dao/users.dao';

const usersMiddl = () => (next: any) => (action: any) => {
  switch (action.type) {
    case FETCH_USERS:
      next([
        apiRequest({
          fn: UsersDao().getUsers,
          onSuccess: FETCH_USERS_SUCCESS,
          onError: USERS_ERROR,
        }),
      ]);
      break;

    case FETCH_USERS_SUCCESS:
      console.log('hereeeeeeee', action.payload);
      next([
        setUsers({ payload: action.payload }),
      ]);
      break;

    case USERS_ERROR:
      console.log(action);
      break;

    default:
      next(action);
  }
};

export default usersMiddl;
