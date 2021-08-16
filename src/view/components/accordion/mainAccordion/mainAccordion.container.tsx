import React, { FC, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers } from '../../../../application/actions/users.action';

import { SimpleAccordion } from './mainAccordion.component';

export const MainAccordionContainer: FC = () => {
  const users = useSelector((state:any) => state.users.collection) ?? [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return (
    <SimpleAccordion data={users} />
  );
};
