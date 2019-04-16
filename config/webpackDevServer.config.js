/* eslint-disable func-names, sort-keys */

const fs = require('fs');

const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const evalSourceMapMiddleware = require('react-dev-utils/evalSourceMapMiddleware');
const noopServiceWorkerMiddleware = require('react-dev-utils/noopServiceWorkerMiddleware');
const ignoredFiles = require('react-dev-utils/ignoredFiles');

const paths = require('./paths');

const host = process.env.HOST || '0.0.0.0';

module.exports = function(proxy, allowedHost) {
  return {
    before(app, server) {
      if (fs.existsSync(paths.proxySetup)) {
        require(paths.proxySetup)(app);
      }
      app.use(evalSourceMapMiddleware(server));
      app.use(errorOverlayMiddleware());
      app.use(noopServiceWorkerMiddleware());
    },
    clientLogLevel: 'none',
    compress: true,
    contentBase: paths.appPublic,
    disableHostCheck:
      !proxy || process.env.DANGEROUSLY_DISABLE_HOST_CHECK === 'true',
    historyApiFallback: {
      disableDotRule: true
    },
    host,
    hot: true,
    https: false,
    overlay: false,
    proxy,
    public: allowedHost,
    publicPath: '/',
    quiet: true,
    watchContentBase: true,
    watchOptions: {
      ignored: ignoredFiles(paths.appSrc)
    }
  };
};
