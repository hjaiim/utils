[![npm](https://img.shields.io/npm/v/hjai-utils.svg)](https://travis-ci.org/hjaiim/utils)
[![Build Status](https://travis-ci.org/hjaiim/utils.svg?branch=master)](https://travis-ci.org/hjaiim/utils)
[![Coverage Status](https://coveralls.io/repos/github/hjaiim/utils/badge.svg?branch=master)]


前端业务代码工具库

> 目的：高效率完成前端业务代码


## 安装使用

1. 直接下载`dist`目录下的[utils.min.js](https://github.com/hjaiim/utils/blob/master/dist/utils.min.js)使用，支持UMD通用模块规范
2. 使用npm安装

### 浏览器:
``` html
  <script src="utils.min.js"></script>
  <script>
      var OS = utils.getOS()
  </script>
```

### npm:
``` bash
$ npm install --save-dev hjai-utils
```

webpack、RequireJS、SeaJS等

``` javascript
// 完整引入
const outils = require('utils')
const OS = outils.getOS()
```

**推荐使用方法**

也可以不需要完整引入所有函数，所以只引入需要使用的方法即可。
``` javascript
// 只引入部分方法('utils/<方法名>')
const getOS = require('utils/getOS')
const OS = getOS()
```
## API文档

### Array
#### &emsp;&emsp;[arrayEqual][arrayEqual]&emsp;&emsp;判断两个数组是否相等