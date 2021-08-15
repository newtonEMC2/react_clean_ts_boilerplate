import { httpEntity } from '../entity/http';

const UsersDao: any = () => {
  const getUsers = ():any => httpEntity().http('https://jsonplaceholder.typicode.com/todos', 'GET')
    .then((res:any) => res.data)
    .catch((err:any) => { throw Error(err); });

  return {
    getUsers,

  };
};

const factory = UsersDao();

export const httpDao = (): any => ({ ...factory });
