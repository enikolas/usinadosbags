const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		main: './src/index.js'
	},
	optimization: {
		removeEmptyChunks: true,
		mergeDuplicateChunks: true,
		splitChunks: {
			chunks: 'all'
		},
		runtimeChunk: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				include: path.resolve(__dirname, 'src'),
				loader: 'babel-loader?cacheDirectory=true',
				options: {
					presets: ['env', 'react']
				}
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
			{
				test: /\.(png|svg|jpg)$/,
				use: [
					'file-loader'
				]
			},
			{
				test: /\.ttf$/,
				use: [
					'file-loader'
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['build']),
		new HtmlWebpackPlugin({
			inject: true,
			template: './public/index.html',
			favicon: './public/favicon.ico'
		}),
		new CopyWebpackPlugin([
			{ from: path.resolve(__dirname, 'public/manifest.json'), to: path.resolve(__dirname, 'build') }
		])
	],
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/'
	}
};
