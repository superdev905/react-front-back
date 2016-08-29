import React from 'react';
import Posts from 'components/pages/posts';
import Post  from 'components/pages/post';

import {
  Route,
  IndexRoute
} from 'react-router';

const posts = (
  <Route path='/posts'>
    <IndexRoute component={ Posts } />
    <Route path='how-to-make-your-react-apps-15x-faster'
      post={ require('md-posts/how-to-make-your-react-apps-15x-faster.md')}
      component={ Post }/>
    <Route path='5-must-have-chrome-extensions-for-front-end-development'
      post={ require('md-posts/5-must-have-chrome-extensions-for-front-end-development.md')}
      component={ Post }/>
    <Route path='playing-with-react-and-d3'
      post={ require('md-posts/playing-with-react-and-d3.md')}
      component={ Post }/>
    <Route path='4-practical-tips-for-drastically-improved-server-side-rendering-in-react'
      post={ require('md-posts/4-practical-tips-for-drastically-improved-server-side-rendering-in-react.md')}
      component={ Post }/>
  </Route>
)

export default posts
