import React    from 'react';
import Layout   from './components/layout';
import Training from './components/training';
import Home     from './components/home';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';

export default <Router history={ browserHistory }>
  <Route path="/" component={ Layout }>
    <Route path="/training" component={ Training }/>
    <IndexRoute component={ Home } />
  </Route>
</Router>