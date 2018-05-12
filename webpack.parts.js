const webpack                       = require('webpack');
const { BundleAnalyzerPlugin }      = require('webpack-bundle-analyzer');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');

exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    hot: true,
    inline: true,
    progress: true,
    host,
    port,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});

exports.analyzeBundle = () => ({
  plugins: [new BundleAnalyzerPlugin()],
});

exports.generateSourceMaps = ({ type }) => ({
  devtool: type,
});

exports.checkDuplicate = options => ({
  plugins: [new DuplicatePackageCheckerPlugin(options)],
});

