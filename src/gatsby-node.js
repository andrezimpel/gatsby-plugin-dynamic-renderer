const path = require('path')
const LoadablePlugin = require('@loadable/webpack-plugin')
const { statsPath } = require('./constants')

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  actions.setWebpackConfig({
    plugins: [new LoadablePlugin({ filename: statsPath, writeToDisk: true })]
  });
};

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({ name: '@loadable/babel-plugin' });
};
