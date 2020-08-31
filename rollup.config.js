// rollup configuration
export default {
  entry: 'src/index.js',
  format: 'umd',
  moduleName: 'VueFroalaCharts',
  globals: {froalacharts: 'FroalaCharts'},
  external: [ 'froalacharts' ],
  dest: 'dist/bundle.js'
};

