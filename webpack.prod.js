const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const common = require('./webpack.common.js');
const dist = path.resolve(__dirname, 'build');

module.exports = merge(common, {
	mode: 'production',
	output: {
		filename: '[name].[chunkhash].js'
	},
	performance: {
		hints: 'warning'
	},
	optimization: {
		flagIncludedChunks: true,
		occurrenceOrder: true,
		usedExports: true,
		sideEffects: true,
		concatenateModules: true,
		noEmitOnErrors: true,
		minimize: true
	},
	module: {
		strictExportPresence: true
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,
			template: './public/index.html',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeEmptyAttributes: true,
				removeStyleLinkTypeAttributes: true,
				keepClosingSlash: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true
			}
		}),
		new webpack.HashedModuleIdsPlugin(),
		new UglifyJSPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new CompressionPlugin({
			algorithm: 'gzip',
			test: /\.js$|\.css$|\.html$/,
			threshold: 10240,
			minRatio: 0.8
		}),
		new WorkboxPlugin({
			globDirectory: dist,
			globPatterns: ['**/*.{html,js,css,jpg,png,svg,ttf,gz}'],
			swDest: path.join(dist, 'sw.js'),
			clientsClaim: true,
			skipWaiting: true,
			runtimeCaching: [{
				urlPattern: new RegExp('https://usinadosbags.com'),
				handler: 'staleWhileRevalidate'
			}]		
		})
	],
	node: {
		dgram: 'empty',
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty'
	}
});
