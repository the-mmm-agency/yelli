const proxy = require('http-proxy-middleware');

// eslint-disable-next-line func-names
module.exports = function(app) {
  app.use(
    proxy('/graphql', {
      changeOrigin: true,
      target: 'https://api.yelli.com'
    })
  );
};
