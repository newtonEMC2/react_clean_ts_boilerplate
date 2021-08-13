import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import MainLayout from '../../layouts/mainLayout/mainLayout.layout';

const Dashboard:React.FC = () => (
  <MainLayout>
    <Button component={Link} to="/users" variant="contained" color="secondary">users</Button>
    dash view
  </MainLayout>
);

export default Dashboard;
