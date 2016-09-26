import React         from 'react';
import { useScroll } from 'react-router-scroll';
import Layout        from 'components/layout';
import Books         from 'components/pages/books';
import About         from 'components/pages/about';
import Home          from 'components/pages/home';
import Workshops     from 'components/pages/workshops';
import React2016     from 'components/pages/workshops/react-2016';
import ReactAndD3    from 'components/pages/workshops/react-and-d3';
import PostRoutes    from './post-routes';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
  applyRouterMiddleware
} from 'react-router';



export default <Router history={ browserHistory} render={ applyRouterMiddleware(useScroll()) }>
  <Route path="/" component={ Layout }>
    <IndexRoute component={ Home } />
    <Route path="/books" component={ Books }/>
    <Route path="/about" component={ About }/>
    <Route path="/workshops">
      <IndexRoute component={ Workshops } />
      <Route path="react-2016" component={ React2016 }/>
      <Route path="react-and-d3" component={ ReactAndD3 }/>
    </Route>
    { PostRoutes }
  </Route>
</Router>
