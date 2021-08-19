import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import IndexRoutingRoute from './presentation/router/routes';

const App:React.FC = () => (
  <Router>
    <IndexRoutingRoute />
  </Router>
);

export default App;
