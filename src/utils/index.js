export function getPostFileNames() {
  return require.context('md-posts', true, /\.md$/)
    .keys().map((file) => file.match(/\/(.*)\./)[1]);
}
