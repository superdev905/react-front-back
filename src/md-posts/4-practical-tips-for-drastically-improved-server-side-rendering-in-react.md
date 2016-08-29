**Editor's Note:**

Check out our upcoming [React University Workshops](http://www.reactuniversity.com/training). Our next workshop, [React 2016](http://www.reactuniversity.com/react-2016 "React 2016"), will be held on April 23 at [Microsoft Reactor](http://microsoftreactor.com/) in San Francisco and will offer a deep dive into creating modern Single-Page Applications (SPA) using React, Redux, React Router, Immutable.js, and Webpack. Also, if you're interested in learning the basics about what it takes to be a Data Visualization Engineer, check out [React and D3](http://www.reactuniversity.com/react-and-d3).

### Introduction

When building isomorphic React applications, we rarely think about server-side rendering performance. Most of us assume it is fast enough. At a recent [ReactSF meetup](http://www.meetup.com/ReactJS-San-Francisco/) meetup, former CTO of Redfin, [Sasha Aickin](https://twitter.com/xander76), not only demonstrated that it is actually really slow, but also gave the audience some great suggestions for vastly improve performance. Using these tips, Sasha took the rendering time of a simple but very large [React component](https://github.com/aickin/react-server-perf-tricks) down from its original second to just under 1 millisecond!

You can watch the original video [here](https://www.youtube.com/watch?v=PnpfGy7q96U), but the following is the abridged version of his presentation. It's worth noting that Sasha originally outlined six tips, but two required his unstable fork of React which I would not recommend using in production.

### Why is React Server-Side Slow?

`ReactDOMServer.renderToString()` is slow for three main of reasons: First, it is synchronous and single-threaded, i.e., it does not take advantage of multicore processors. Second, `renderToString()` also shares client-side rendering code, i.e., it is performing tasks not necessary on the server (such as keeping track of the Virtual DOM and Synthetic Events). Most importantly, because Facebook is not using ‘renderToString()’ in production, the server-side is not receiving as much attention as other parts of React.

### Tip #1: Set Node to Production Mode

This change alone results in the highest performance ROI by far. By setting `NODE_ENV=production`, there is a 400% performance improvement -- with no downsides! If you are not doing this in production, start now.

But, why is the production mode [Node](https://nodejs.org/en/) setting so much faster? Because React does a lot of error checking in development mode. While this is useful for a developer, it negatively impacts performance. In development mode, React spends 75% of its time just checking for error warnings.

### Tip #2: Use the Minified Version of React

Generally, you do not need to minify code for Node. The minified version of React, however, is not just compressed. Although the Tip #1 removes error checking code, React is still checking the Node environment. As it turns out, `process.env.NODE_ENV` is a very time-consuming operation. The minified version of React runs through [Envify](https://github.com/hughsk/envify) in order to replace `process.env.NODE_ENV` with strings. Using the minified version of React improves performance by as much as 30%.

Implementation is quite simple:

```javascript
import ReactDOMServer from ‘react/dist/react.min'
```

Be sure to only use this tip in production because it will remove React's helpful developer warnings. 

### Tip #3: Babel React Transforms

According to the 0.14 [CHANGELOG](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#compiler-optimizations), React now officially supports two compiler optimizations on Babel 5.824 or newer. [React Inline Elements](https://babeljs.io/docs/plugins/transform-react-inline-elements/) converts JSX elements such that instead of calling `React.createElement`, it returns an object literal like `{type: 'div', props: ...}`. [React Constant Elements](https://babeljs.io/docs/plugins/transform-react-constant-elements/) hoists element creation to the top level of fully static subtrees thereby reducing calls to `React.createElement` and the resulting allocations. More importantly, it also tells React that the subtree hasn't changed so that React can completely skip it when reconciling. Using these two transforms results in a 10% performance boost on the server as well as the browser.

Be sure to only use these transforms in production because they will make warning messages more cryptic and skip propType checking.

```bash
npm install --save-dev babel-plugin-transform-react-constant-elements babel-plugin-transform-react-inline-elements
```

```javascript
// webpack.config.js
“plugins”: [“transform-react-constant-elements”, “transform-react-inline-elements”]
```

### Tip #4: Avoid `React.createClass()`

ES6 classes and pure functional stateless React components are two to three times faster than `createClass()`. The reason for this is not entirely clear at the moment, but it might have to do with autobinding with `createClass()`. There are a few drawbacks to this approach. Not only will you lose the ability to easily add mixins (which may or may not be a bad thing), but also you will need to use ES6 classes (which may require rewriting a lot of code).
