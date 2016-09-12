import './index.scss';
import React                from 'react';
import { getPostFileNames } from 'utils';
import { startCase }        from 'lodash';
import { Link }             from 'react-router';
import Tagline              from 'components/common/tagline';

export default function Posts() {
  const posts = generatePostListings();
  return (
    <div className="posts">
      <Tagline title="Posts"/>
      <div className="site-content posts--post-listings row">
        <div className="medium-6 medium-offset-3 columns">
          { posts }
        </div>
      </div>
    </div>
  )
}

function generatePostListings() {
  return getPostFileNames().map((rawName, i) => {
    return <PostListing key={ i } rawName={ rawName } />
  });
}

function PostListing({ rawName }) {
  const title = startCase(rawName);
  return <div className="posts--post-listing">
    <Link to={ `/posts/${rawName}` }><h3>{ title }</h3></Link>
  </div>
}
