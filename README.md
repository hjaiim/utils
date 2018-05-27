[![npm](https://img.shields.io/npm/v/hjai-utils.svg)](https://travis-ci.org/hjaiim/utils)
[![Build Status](https://travis-ci.org/hjaiim/utils.svg?branch=master)](https://travis-ci.org/hjaiim/utils)
[![Coverage Status](https://coveralls.io/repos/github/hjaiim/utils/badge.svg?branch=master)]

1.npm init
2.npm install webpack -S

3.webpack4.0废除了自带的压缩js插件
new webpack.optimize.UglifyJsPlugin()

4.uglifyjs-webpack-plugin(来替换)
  a.用npm安装uglifyjs-webpack-plugin插件;
  b.将其引入：var uglifyjsPlugin=require('uglifyjs-webpack-plugin');
  c.删除以前的写法，将optimization的JS压缩与plugins并排写在一起，注意，是并排，
  而不是像以前一样写在plugins里面。

5.karma-chrome-launcher
a.karma默认启动的浏览器是 phantomjs，而我想用 Chrome
b.修改配置
karma.conf.js
    browsers:['Chrome']
修改浏览器配置。

c.运行查看
   #karma start test/unit/karma.conf.js
   成功启动Chrome浏览器。


6.karma-mocha-reporter用于使karma日志输出保持mocha原来的风格；
7.karma-coverage是用来检验测试的代码覆盖率。

8.