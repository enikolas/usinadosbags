const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');

const common = require('./webpack.common.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'build'),
		historyApiFallback: true,
		host: '0.0.0.0',
		port: 3000,
		hot: true
	},
	optimization: {
		namedModules: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	output: {
		filename: '[name].bundle.js'
	}
});
