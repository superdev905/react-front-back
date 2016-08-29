import React                from 'react';
import Posts                from 'components/pages/posts';
import Post                 from 'components/pages/post';
import { getPostFileNames } from 'utils';
import {
  Route,
  IndexRoute
} from 'react-router';

export default (
  <Route path='/posts'>
    <IndexRoute component={ Posts } />
    { generatePostRoutes() }
  </Route>
)

function generatePostRoutes() {
  return getPostFileNames().map((name, i) => {
    return <Route key={ i }
      path={ name }
      post={ require(`md-posts/${name}.md`) }
      component={ Post }/>
  });
}
