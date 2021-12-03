import nunjucks from 'vite-plugin-nunjucks'

export default {
  plugins: [
    nunjucks({
      variables: { 'index.html': { username: 'John' } }
    })
  ]
}
