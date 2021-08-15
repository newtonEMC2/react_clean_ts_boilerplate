import React from 'react';
import { httpDao } from '../../../infrastructure/http/dao/users.dao';

import MainLayout from '../../layouts/mainLayout/mainLayout.layout';

const Users: React.FC = () => {
  React.useEffect(() => {
    httpDao().getUsers().then((data:any) => console.log(data)).catch((err:any) => console.log('iepp', err));
  }, []);
  return (
    <MainLayout>
      <div>users lad</div>
    </MainLayout>
  );
};

export default Users;
