const path = require('path');
const nodeExternals = require('webpack-node-externals');

const { getAppEnv } = require('./env');

const env = getAppEnv();
const { PUBLIC_URL = '' } = env.raw;

const resolvePath = relativePath => path.resolve(__dirname, relativePath);

if (env.raw.NODE_ENV !== 'production') {
  throw new Error('Production builds must have NODE_ENV=production.');
}

module.exports = {
  mode: 'production',
  target: 'node',
  node: {
    __dirname: true
  },
  entry: './server/app.js',
  output: {
    path: resolvePath('../build'),
    filename: 'server.js',
    publicPath: PUBLIC_URL + '/',
    globalObject: 'this',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: [
            [
              'css-modules-transform',
              {
                camelCase: true,
                extensions: ['.css', '.scss'],
                generateScopedName: '[hash:base64]',
                ignore: 'src/styles'
              }
            ],
            'dynamic-import-node'
          ]
        }
      },
      {
        test: /\.s?css$/,
        exclude: [resolvePath('../src/styles')],
        use: [
          {
            loader: 'css-loader',
            options: {
              localsConvention: 'camelCase',
              modules: true
            }
          },
          'sass-loader',
          'import-glob-loader'
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        include: [resolvePath('../public')],
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      }
    ]
  },

  resolve: {
    modules: [
      path.resolve(__dirname),
      path.resolve(__dirname, '../node_modules')
    ],
    alias: {
      TweenLite: 'gsap/src/minified/TweenLite.min.js',
      TweenMax: 'gsap/src/minified/TweenMax.min.js',
      TimelineLite: 'gsap/src/minified/TimelineLite.min.js',
      TimelineMax: 'gsap/src/minified/TimelineMax.min.js',
      ScrollMagic: 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
      'animation.gsap': path.resolve(
        'node_modules',
        'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js'
      ),
      'debug.addIndicators':
        'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js'
    },
    extensions: ['.js', '.jsx', '.json', '.scss']
  },

  externals: [nodeExternals()]
};
