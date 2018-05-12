const path    = require("path");
const webpack = require("webpack");
const merge   = require("webpack-merge");
const parts   = require("./webpack.parts");

// DEV CONFIGS
const developmentConfig = merge([
  parts.analyzeBundle(),
  parts.devServer({
    host: "localhost",
    port: 3000,
    overlay: true,
    stats: "errors-only",
  }),
  {
    output: {
      filename: "bundled.js",
    },
  },
]);

// SHARED CONFIGS
const commonConfig = merge([
  parts.generateSourceMaps({ type: "none" }),
  {
    target: "web",
    performance: {
      hints: "warning",
      maxEntrypointSize: 100000, // in bytes
      maxAssetSize: 450000,      // in bytes
    },
    entry: "./index.jsx",
    context: path.resolve(__dirname, "src"),
    resolve: {
      extensions: [".js", ".jsx"],
    },
    module: {
      rules: [
        {
          test: /\.jsx$/,
          exclude: [path.resolve(__dirname, "node_modules")],
          loader: "babel-loader",
        },
      ],
    },
  },
]);

// EXPORT
module.exports = env => {
  return merge(developmentConfig, commonConfig);
};
