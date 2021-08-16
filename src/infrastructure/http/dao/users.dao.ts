import { httpEntity } from '../entity/http';

const UsersDaoFactory: any = () => {
  const getUsers = ():any => httpEntity().http('https://jsonplaceholder.typicode.com/todos', 'GET')
    .then((res:any) => res.data)
    .catch((err:any) => { throw Error(err); });

  return {
    getUsers,

  };
};

const factory = UsersDaoFactory();

export const UsersDao = (): any => ({ ...factory });
