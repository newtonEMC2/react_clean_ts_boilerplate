import React from 'react';
import { Route, Switch } from 'react-router-dom';

import indexRoutingConfig from '../config';

const IndexRoute:React.FC = () => (

  <Switch>
    {
     indexRoutingConfig.map(({ guarded, path, ...rest }) => <Route {...rest} path={path} key={path} />)
    }
  </Switch>
);

export default IndexRoute;
