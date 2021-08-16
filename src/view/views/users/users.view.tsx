import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import MainLayout from '../../layouts/mainLayout/mainLayout.layout';

import { fetchUsers } from '../../../application/actions/users.action';

const Users: React.FC = () => {
  // const users = useSelector((state) => state.users) ?? [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <MainLayout>
      <div>helloooo</div>
    </MainLayout>
  );
};

export default Users;
