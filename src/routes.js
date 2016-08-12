import React    from 'react';
import Layout   from './components/layout';
import Training from './components/training';
import Books    from './components/books';
import Posts    from './components/posts';
import About    from './components/about';
import Register from './components/register';
import Home     from './components/home';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router';

export default <Router history={ browserHistory }>
  <Route path="/"           component={ Layout }>
    <Route path="/training" component={ Training }/>
    <Route path="/books"    component={ Books }/> 
    <Route path="/posts"    component={ Posts }/>
    <Route path="/about"    component={ About }/>
    <Route path="/register" component={ Register }/>
    <IndexRoute             component={ Home } />
  </Route>
</Router>