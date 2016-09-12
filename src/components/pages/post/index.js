import './index.scss';
import 'highlight.js/styles/tomorrow-night-eighties.css';
import React         from 'react';
import ReactMarkdown from 'react-markdown';
import { startCase } from 'lodash';
import hljs          from 'highlight.js';
import Tagline       from 'components/common/tagline';

export default class Post extends React.Component {
  componentDidMount() {
    hljs.initHighlighting();
  }

  componentDidUpdate() {
    hljs.initHighlighting();
  }

  render() {
    return <div className="post">
      <Tagline title={ startCase(this.props.route.path) }/>
      <div className="row post--content">
        <div className="small-10 small-offset-1 large-8 large-offset-2 columns">
          <ReactMarkdown source={ this.props.route.post }/>
        </div>
      </div>
    </div>
  }
}
