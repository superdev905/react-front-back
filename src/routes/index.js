import React      from 'react';
import Layout     from 'components/layout';
import Training   from 'components/pages/training';
import Books      from 'components/pages/books';
import About      from 'components/pages/about';
import Register   from 'components/pages/register';
import Home       from 'components/pages/home';
import React2016  from 'components/pages/training/react-2016';
import ReactAndD3 from 'components/pages/training/react-and-d3';
import PostRoutes from './post-routes';

import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';

export default <Router history={ browserHistory }>
  <Route path="/" component={ Layout }>
    <IndexRoute component={ Home } />
    <Route path="/books" component={ Books }/>
    <Route path="/about" component={ About }/>
    <Route path="/register" component={ Register }/>
    <Route path="/training">
      <IndexRoute component={ Training } />
      <Route path="react-2016" component={ React2016 }/>
      <Route path="react-and-d3" component={ ReactAndD3 }/>
    </Route>
    { PostRoutes }
  </Route>
</Router>
