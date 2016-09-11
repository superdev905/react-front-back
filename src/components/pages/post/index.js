import './index.scss';
import 'highlight.js/styles/tomorrow-night-eighties.css';
import React         from 'react';
import ReactMarkdown from 'react-markdown';
import hljs          from 'highlight.js';

export default class Post extends React.Component {
  componentDidMount() {
    hljs.initHighlighting();
  }

  componentDidUpdate() {
    hljs.initHighlighting();
  }

  render() {
    return <ReactMarkdown source={ this.props.route.post }/>
  }
}
