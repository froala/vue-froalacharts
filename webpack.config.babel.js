import webpack from 'webpack';
// import lodash from 'lodash';

const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const libraryNamePlugin = 'VueFroalaCharts';
const libraryNameComponent = 'VueFroalaChartsComponent';

const vueFCPluginConfig = {
  entry: {
    'vue-froalacharts': __dirname + '/src/index.js',
    'vue-froalacharts.min': __dirname + '/src/index.js'
  },
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    library: libraryNamePlugin,
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    froalacharts: {
      commonjs2: 'froalacharts',
      commonjs: 'froalacharts',
      amd: 'froalacharts',
      root: 'FroalaCharts'
    }
  },
  plugins: [
    new UglifyJsPlugin({
      include: 'vue-froalacharts.min.js',
      minimize: true
    })
  ]
};

const vueFCComponentConfig = {
  entry: {
    index: __dirname + '/src/vue-froalacharts-component.js',
    'index.min': __dirname + '/src/vue-froalacharts-component.js'
  },
  devtool: 'source-map',
  output: {
    path: __dirname + '/component',
    filename: '[name].js',
    library: libraryNameComponent,
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      }
    ]
  },
  externals: {
    froalacharts: {
      commonjs2: 'froalacharts',
      commonjs: 'froalacharts',
      amd: 'froalacharts',
      root: 'FroalaCharts'
    }
  },
  plugins: [
    new UglifyJsPlugin({
      include: 'index.min.js',
      minimize: true
    })
  ]
};

module.exports = [vueFCPluginConfig, vueFCComponentConfig];
