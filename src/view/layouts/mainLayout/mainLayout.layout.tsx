import React from 'react';

import Grid from '@material-ui/core/Grid';
// import Toolbar from '@material-ui/core/Toolbar';

import MainHeader from '../../components/headers/mainHeader/mainHeader.component';

const MainLayout: React.FC = ({ children: View }) => (
  <Grid id="layout" container direction="column">
    <Grid item>
      <MainHeader />
    </Grid>
    <Grid item>{View}</Grid>
  </Grid>
);

export default MainLayout;
