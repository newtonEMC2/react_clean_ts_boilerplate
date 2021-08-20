import { usersMiddl } from '../middlewares/feature/users.middl';
import { apiRequest } from '../actions/api.action';
import { fetchUsers, setUsers } from '../actions/users.action';
import { FETCH_USERS_SUCCESS, USERS_ERROR } from '../types';

const http = {
  UsersDao: () => ({
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    getUsers: jest.fn().mockImplementationOnce(() => {}),
  }),
};

const next = jest.fn();

describe('users middleware', () => {
  it('FETCH_USERS', () => {
    usersMiddl({ http })()(next)(fetchUsers());
    // next called once
    expect(next).toHaveBeenCalledTimes(1);
    // passes action to next middleware
    // expect(next).toHaveBeenCalledWith([apiRequest({ fn: http.UsersDao().getUsers, onSuccess: FETCH_USERS_SUCCESS, onError: USERS_ERROR })]);
  });
  it('FETCH_USERS_SUCCESS', () => {
    usersMiddl({ http })()(next)({ type: FETCH_USERS_SUCCESS, payload: [{}] });
    // next called once
    expect(next).toHaveBeenCalledTimes(1);
    // passes action to next middleware
    expect(next).toHaveBeenCalledWith([setUsers({ payload: [{}] })]);
  });
});
