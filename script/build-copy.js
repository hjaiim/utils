/**
 * Created by haojun on 2018/5/3.
 * 把打完包总的js,和单独对应写的方法,copy到一个文件夹,发布到npm提供使用
 */
const ora = require('ora')
const rm = require('rimraf')
const copy = require('copy')
const path = require('path')
const fs = require('fs')
const chalk = require('chalk')
const rootPath = path.resolve(__dirname, '../')
const pkgJson = require('../package.json')

let copying = ora('copying-----------');
copying.start();

rm('*.js', (err)=>
{
	if (err) throw (err)
	let folderList = fs.readdirSync(path.resolve(rootPath, 'src'));
	folderList.forEach((item, index)=>
	{
		copy(`src/${item}/*.js`, rootPath, function (err,files)
		{
			if (err) throw (err)
			if (index === folderList.length - 1) {
				console.log(chalk.green('Copy success----------.\n'))
				copying.stop()
			}
		})
	})
})

