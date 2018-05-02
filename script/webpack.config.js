/**
 * Created by haojun on 2018/4/27.
 */
const webpack = require('webpack');
const path = require('path');
const pkgJson = require('../package.json');
const rootPath = path.resolve(__dirname, '../');
const UglifyJsPlugin=require('uglifyjs-webpack-plugin');


module.exports = {
	entry: path.resolve(rootPath, 'src', 'main.js'),
	output: {
		filename: `${pkgJson.buildName}.min.js`,
		path: path.resolve(rootPath, 'dist'),
		library: `${pkgJson.name}`,
		libraryTarget: "umd"
	},
	module: {
		rules: [{
			test: /\.js$/,
			loader: "babel-loader"
		}]
	},
	//webpack4.0之后舍弃掉了
//	plugins: [
//		new webpack.optimize.UglifyJsPlugin()
//	]
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					compress: false
				}
			})
		]
	}
}