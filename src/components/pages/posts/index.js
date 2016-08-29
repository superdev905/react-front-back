import React                from 'react';
import { getPostFileNames } from 'utils';
import { startCase }        from 'lodash';
import { Link }             from 'react-router';

export default function Posts() {
  return (
    <div>{ generatePostListings() }</div>
  )
}

function generatePostListings() {
  return getPostFileNames().map((rawName, i) => {
    return <PostListing key={ i } rawName={ rawName } />
  });
}

function PostListing({ rawName }) {
  const title = startCase(rawName);
  return <div>
    <Link to={ `/posts/${rawName}` }><h1>{ title }</h1></Link>
  </div>
}
