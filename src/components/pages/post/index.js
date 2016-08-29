import React         from 'react';
import ReactMarkdown from 'react-markdown';

export default function Post({ route: { post }}) {
  return <ReactMarkdown source={ post }/>
}
