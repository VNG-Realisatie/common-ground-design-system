const webpack = require('webpack');

const baseConfig = {
	entry: {
		ui: './js/ui.js'
	},
	output: {
		path: __dirname + '/public/js',
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: ['babel-loader']
			}
		]
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all'
				}
			}
		}
	},
	plugins: []
};

const devConfig = Object.assign({}, baseConfig);
devConfig.devtool = '#inline-source-map';

const prodConfig = Object.assign({}, baseConfig);


module.exports = {
	dev: devConfig,
	prod: prodConfig
};
