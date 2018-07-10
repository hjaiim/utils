[![npm](https://img.shields.io/npm/v/hjai-utils.svg)](https://www.npmjs.com/package/hjai-utils)
[![Build Status](https://travis-ci.org/hjaiim/utils.svg?branch=master)](https://travis-ci.org/hjaiim/utils)
[![Coverage Status](https://coveralls.io/repos/github/hjaiim/utils/badge.svg?branch=master)]
![LICENSE MIT](https://img.shields.io/npm/l/hjai-utils.svg)](https://www.npmjs.com/package/hjai-utils)


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
$ npm install --save hjai-utils
```

webpack、RequireJS、SeaJS等

``` javascript
// 完整引入
const utils = require('hjai-utils/dist/utils.min.js');
const OS = utils.getOS();

import * as utils from 'hjai-utils/dist/utils.min.js';
utils.getOS();
```

**推荐使用方法**

也可以不需要完整引入所有函数，所以只引入需要使用的方法即可。
``` javascript
// 只引入部分方法('hjai-utils/<方法名>')
const getOS = require('hjai-utils/getOS');
const OS = getOS();

import * as utils from 'hjai-utils/getOS';
utils.getOS();
```
## API文档

### Array
#### &emsp;&emsp;[arrayEqual][arrayEqual]&emsp;&emsp;判断两个数组是否相等
[arrayEqual]:https://github.com/hjaiim/utils/blob/master/src/array/arrayEqual.js

### Device
#### &emsp;&emsp;[getExplore][getExplore]&emsp;&emsp;获取浏览器类型和版本号
[getExplore]:https://github.com/hjaiim/utils/blob/master/src/device/getExplore.js
#### &emsp;&emsp;[getOS][getOS]&emsp;&emsp;获取操作系统类型
[getOS]:https://github.com/hjaiim/utils/blob/master/src/device/getOS.js

### Random
#### &emsp;&emsp;[randomColor][randomColor] &emsp;&emsp;随机生成颜色
#### &emsp;&emsp;[randomNum][randomNum]&emsp;&emsp;生成指定范围随机数
[randomColor]:https://github.com/hjaiim/utils/blob/master/src/random/randomColor.js
[randomNum]:https://github.com/hjaiim/utils/blob/master/src/random/randomNum.js

### Regexp
#### &emsp;&emsp;[isEmail][isEmail]&emsp;&emsp;判断是否为邮箱地址
#### &emsp;&emsp;[isIdCard][isIdCard]&emsp;&emsp;判断是否为身份证号
#### &emsp;&emsp;[isPhoneNum][isPhoneNum]&emsp;&emsp;判断是否为手机号
#### &emsp;&emsp;[isUrl][isUrl]&emsp;&emsp;判断是否为URL地址
[isEmail]:https://github.com/hjaiim/utils/blob/master/src/regexp/isEmail.js
[isIdCard]:https://github.com/hjaiim/utils/blob/master/src/regexp/isIdCard.js
[isPhoneNum]:https://github.com/hjaiim/utils/blob/master/src/regexp/isPhoneNum.js
[isUrl]:https://github.com/hjaiim/utils/blob/master/src/regexp/isUrl.js

### Time
#### &emsp;&emsp;[getTimer][time]&emsp;&emsp;获取当前已经运行了多少豪秒
#### &emsp;&emsp;[getNowStamp][time]&emsp;&emsp;获取当前时间戳
#### &emsp;&emsp;[getFullDate][time]&emsp;&emsp;根据时间戳获取完整日期 yy-mm-dd hh:mm:ss
#### &emsp;&emsp;[getFullDateArray][time]&emsp;&emsp;根据时间戳获取日期的数组形式 [yy,mm,dd,hh,mm,ss]
#### &emsp;&emsp;[getTime][time]&emsp;&emsp;根据时间戳获取时间的日期格式 hh:mm:ss
#### &emsp;&emsp;[getTimeArray][time]&emsp;&emsp;根据时间戳，获取时间的数组形式[hh,mm,ss]
#### &emsp;&emsp;[getDate][time]&emsp;&emsp;根据时间戳，获取日期的日期形式 yy-mm-dd
#### &emsp;&emsp;[getFullDate][time]&emsp;&emsp;根据时间戳获取完整日期 yy-mm-dd hh:mm:ss
#### &emsp;&emsp;[getFullDateArray][time]&emsp;&emsp;根据时间戳获取日期的数组形式 [yy,mm,dd,hh,mm,ss]
#### &emsp;&emsp;[getCountDown][time]&emsp;&emsp;根据传入的时间（秒/时间戳10位/时间戳13位），返回倒计时的数组形式[dd,hh,mm,ss]
#### &emsp;&emsp;[getPastSecond][time]&emsp;&emsp;获取指定时间戳距离0点已经过去了多少秒（不传，就是今天过去了多少秒）
#### &emsp;&emsp;[getTimeArray][time]&emsp;&emsp;根据时间戳，获取时间的数组形式[hh,mm,ss]
#### &emsp;&emsp;[getDateArray][time]&emsp;&emsp;根据时间戳，获取日期的数组形式 [yy,mm,dd]
#### &emsp;&emsp;[getWeek][time]&emsp;&emsp;获取指定的week的日期数据
#### &emsp;&emsp;[getMonthByOffset][time]&emsp;&emsp;获取指定的month的日期列表
#### &emsp;&emsp;[getWeekNum][time]&emsp;&emsp;根据时间戳/日期，获取属于今年第几周（周一开始）
[time]:https://github.com/hjaiim/utils/blob/master/src/time/time.js

### Event
#### &emsp;&emsp;[addEventListenerOnce][event]&emsp;&emsp;添加一次监听
#### &emsp;&emsp;[addEventListener][event]&emsp;&emsp;添加监听
#### &emsp;&emsp;[removeEventListener][event]&emsp;&emsp;移除监听
#### &emsp;&emsp;[dispatchEvent][event]&emsp;&emsp;派发监听回调
#### &emsp;&emsp;[removeAllListener][event]&emsp;&emsp;移除所有监听
[event]:https://github.com/hjaiim/utils/blob/master/src/event/event.js





