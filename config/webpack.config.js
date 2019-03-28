/* eslint-disable func-names, prefer-template, sort-keys, no-nested-ternary */
const fs = require('fs');
const path = require('path');

const webpack = require('webpack');
const resolve = require('resolve');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');
const ManifestPlugin = require('webpack-manifest-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin-alt');
const WebpackBarPlugin = require('webpackbar');
const typescriptFormatter = require('react-dev-utils/typescriptFormatter');

const getClientEnvironment = require('./env');
const paths = require('./paths');

const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
const shouldInlineRuntimeChunk = process.env.INLINE_RUNTIME_CHUNK !== 'false';
const useTypeScript = fs.existsSync(paths.appTsConfig);

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = function(webpackEnv) {
  const isEnvDevelopment = webpackEnv === 'development';
  const isEnvProduction = webpackEnv === 'production';

  const publicPath = isEnvProduction
    ? paths.servedPath
    : isEnvDevelopment && '/';

  const shouldUseRelativeAssetPaths = publicPath === './';

  const publicUrl = isEnvProduction
    ? publicPath.slice(0, -1)
    : isEnvDevelopment && '';
  const env = getClientEnvironment(publicUrl);

  const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
      isEnvDevelopment && require.resolve('style-loader'),
      isEnvProduction && {
        loader: MiniCssExtractPlugin.loader,
        options: Object.assign(
          {},
          shouldUseRelativeAssetPaths ? { publicPath: '../../' } : undefined
        )
      },
      {
        loader: require.resolve('css-loader'),
        options: cssOptions
      },
      {
        // Options for PostCSS as we reference these options twice
        // Adds vendor prefixing based on your specified browser support in
        // package.json
        loader: require.resolve('postcss-loader'),
        options: {
          // Necessary for external CSS imports to work
          // https://github.com/facebook/create-react-app/issues/2677
          ident: 'postcss',
          plugins: () => [
            require('postcss-flexbugs-fixes'),
            require('postcss-preset-env')({
              autoprefixer: {
                flexbox: 'no-2009'
              },
              stage: 3
            })
          ],
          sourceMap: isEnvProduction && shouldUseSourceMap
        }
      }
    ].filter(Boolean);
    if (preProcessor) {
      loaders.push({
        loader: require.resolve(preProcessor),
        options: {
          sourceMap: isEnvProduction && shouldUseSourceMap
        }
      });
    }
    return loaders;
  };

  // common function to get style loaders
  return {
    bail: isEnvProduction,
    devtool: isEnvProduction
      ? shouldUseSourceMap
        ? 'source-map'
        : false
      : isEnvDevelopment && 'eval-source-map',
    entry: [
      isEnvDevelopment &&
        require.resolve('react-dev-utils/webpackHotDevClient'),
      paths.appIndexJs
    ].filter(Boolean),
    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
    module: {
      rules: [
        { parser: { requireEnsure: false } },
        {
          enforce: 'pre',
          include: paths.appSrc,
          test: /\.(js|mjs|jsx)$/,
          use: [
            {
              loader: require.resolve('eslint-loader'),
              options: {
                eslintPath: require.resolve('eslint'),
                formatter: require.resolve('eslint-formatter-pretty')
              }
            }
          ]
        },
        {
          test: /\.svg$/,
          use: '@svgr/webpack?-prettier,-svgo![path]'
        },
        {
          oneOf: [
            {
              loader: require.resolve('url-loader'),
              options: {
                limit: 10000,
                name: 'static/media/[name].[hash:8].[ext]'
              },
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.webp$/]
            },
            {
              include: paths.appSrc,
              loader: require.resolve('babel-loader'),
              options: {
                cacheCompression: isEnvProduction,
                cacheDirectory: true,
                compact: isEnvProduction
              },
              test: /\.(js|mjs|jsx|ts|tsx)$/
            },
            {
              exclude: /@babel(?:\/|\\{1,2})runtime/,
              loader: require.resolve('babel-loader'),
              options: {
                cacheCompression: isEnvProduction,
                cacheDirectory: true
              },
              test: /\.(js|mjs)$/
            },
            {
              exclude: /node_modules/,
              loader: require.resolve('graphql-tag/loader'),
              test: /\.(graphql|gql)$/
            },
            {
              exclude: cssModuleRegex,
              sideEffects: true,
              test: cssRegex,
              use: getStyleLoaders({
                importLoaders: 1,
                sourceMap: isEnvProduction && shouldUseSourceMap
              })
            },
            {
              test: cssModuleRegex,
              use: getStyleLoaders({
                getLocalIdent: getCSSModuleLocalIdent,
                importLoaders: 1,
                modules: true,
                sourceMap: isEnvProduction && shouldUseSourceMap
              })
            },
            {
              exclude: sassModuleRegex,
              sideEffects: true,
              test: sassRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 2,
                  sourceMap: isEnvProduction && shouldUseSourceMap
                },
                'sass-loader'
              )
            },
            {
              test: sassModuleRegex,
              use: getStyleLoaders(
                {
                  getLocalIdent: getCSSModuleLocalIdent,
                  importLoaders: 2,
                  modules: true,
                  sourceMap: isEnvProduction && shouldUseSourceMap
                },
                'sass-loader'
              )
            },
            {
              exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
              loader: require.resolve('file-loader'),
              options: {
                name: 'static/media/[name].[hash:8].[ext]'
              }
            }
          ]
        }
      ],
      strictExportPresence: true
    },
    node: {
      child_process: 'empty',
      dgram: 'empty',
      dns: 'mock',
      fs: 'empty',
      module: 'empty',
      net: 'empty',
      tls: 'empty'
    },
    optimization: {
      minimize: isEnvProduction,
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: shouldUseSourceMap,
          terserOptions: {
            compress: {
              comparisons: false,
              ecma: 5,
              inline: 2,
              warnings: false
            },
            mangle: {
              safari10: true
            },
            output: {
              ascii_only: true,
              comments: false,
              ecma: 5
            },
            parse: {
              ecma: 8
            }
          }
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            map: shouldUseSourceMap
              ? {
                  // `inline: false` forces the sourcemap to be output into a
                  // separate file
                  annotation: true,
                  // `annotation: true` appends the sourceMappingURL to the end of
                  // the css file, helping the browser find the sourcemap
                  inline: false
                }
              : false,
            parser: safePostCssParser
          }
        })
      ],
      runtimeChunk: true,
      splitChunks: {
        cacheGroups: {
          common: {
            chunks: 'async',
            enforce: true,
            minChunks: 2,
            name: 'common',
            priority: 10,
            reuseExistingChunk: true
          },
          vendor: {
            chunks: 'all',
            name: 'vendor',
            priority: 20,
            test: /node_modules/
          }
        },
        chunks: 'all'
      }
    },
    output: {
      chunkFilename: isEnvProduction
        ? 'static/js/[name].[chunkhash:8].chunk.js'
        : isEnvDevelopment && 'static/js/[name].chunk.js',
      devtoolModuleFilenameTemplate: isEnvProduction
        ? info =>
            path
              .relative(paths.appSrc, info.absoluteResourcePath)
              .replace(/\\/g, '/')
        : isEnvDevelopment &&
          (info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')),
      filename: isEnvProduction
        ? 'static/js/[name].[chunkhash:8].js'
        : isEnvDevelopment && 'static/js/bundle.js',
      path: isEnvProduction ? paths.appBuild : undefined,
      pathinfo: isEnvDevelopment,
      publicPath
    },
    performance: false,
    plugins: [
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            inject: true,
            template: paths.appHtml
          },
          isEnvProduction
            ? {
                minify: {
                  collapseWhitespace: true,
                  keepClosingSlash: true,
                  minifyCSS: true,
                  minifyJS: true,
                  minifyURLs: true,
                  removeComments: true,
                  removeEmptyAttributes: true,
                  removeRedundantAttributes: true,
                  removeStyleLinkTypeAttributes: true,
                  useShortDoctype: true
                }
              }
            : undefined
        )
      ),
      isEnvProduction &&
        shouldInlineRuntimeChunk &&
        new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime~.+[.]js/]),
      new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
      new ModuleNotFoundPlugin(paths.appPath),
      new webpack.DefinePlugin(env.stringified),
      isEnvDevelopment && new webpack.HotModuleReplacementPlugin(),
      isEnvDevelopment && new CaseSensitivePathsPlugin(),
      isEnvDevelopment &&
        new WatchMissingNodeModulesPlugin(paths.appNodeModules),
      isEnvProduction &&
        new MiniCssExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
          filename: 'static/css/[name].[contenthash:8].css'
        }),
      new ManifestPlugin({
        fileName: 'asset-manifest.json',
        publicPath
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      isEnvProduction &&
        new WorkboxWebpackPlugin.GenerateSW({
          clientsClaim: true,
          directoryIndex: '/index.html',
          exclude: [/\.map$/, /asset-manifest\.json$/],
          importWorkboxFrom: 'cdn',
          navigateFallback: `${publicUrl}/index.html`,
          navigateFallbackBlacklist: [
            new RegExp('^/_'),
            new RegExp('/[^/]+\\.[^/]+$')
          ],
          precacheManifestFilename: 'precache-manifest.json',
          runtimeCaching: [
            {
              handler: 'staleWhileRevalidate',
              options: {
                cacheableResponse: {
                  statuses: [0, 200]
                },
                cacheName: 'images',
                expiration: {
                  maxAgeSeconds: 30 * 24 * 60 * 60,
                  maxEntries: 50
                }
              },
              urlPattern: new RegExp('https://storage.googleapis.com/')
            },
            {
              handler: 'networkFirst',
              options: {
                cacheableResponse: {
                  statuses: [0, 200]
                },
                cacheName: 'api',
                expiration: {
                  maxAgeSeconds: 60,
                  maxEntries: 5
                },
                networkTimeoutSeconds: 10
              },
              urlPattern: new RegExp('https://api.yelli.com/.*')
            }
          ],
          skipWaiting: true
        }),
      isEnvDevelopment && new WebpackBarPlugin(),
      useTypeScript &&
        new ForkTsCheckerWebpackPlugin({
          async: false,
          checkSyntacticErrors: true,
          compilerOptions: {
            isolatedModules: true,
            jsx: 'preserve',
            module: 'esnext',
            moduleResolution: 'node',
            noEmit: true,
            resolveJsonModule: true
          },
          formatter: typescriptFormatter,
          reportFiles: [
            '**',
            '!**/*.json',
            '!**/__tests__/**',
            '!**/?(*.)(spec|test).*',
            '!**/src/setupProxy.*',
            '!**/src/setupTests.*'
          ],
          silent: true,
          tsconfig: paths.appTsConfig,
          typescript: resolve.sync('typescript', {
            basedir: paths.appNodeModules
          }),
          watch: paths.appSrc
        })
    ].filter(Boolean),
    resolve: {
      alias: {
        'react-native': 'react-native-web'
      },
      extensions: paths.moduleFileExtensions
        .map(ext => `.${ext}`)
        .filter(ext => useTypeScript || !ext.includes('ts')),
      modules: [paths.appSrc, paths.nodeModules],
      plugins: [
        PnpWebpackPlugin,
        new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson])
      ]
    },
    resolveLoader: {
      plugins: [PnpWebpackPlugin.moduleLoader(module)]
    }
  };
};
