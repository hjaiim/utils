/**
 * Created by haojun on 2018/7/10.
 */
var _locStorage, _sesStorage;

try
{
	_locStorage = window.localStorage;
}
catch (err)
{
	mockLocStorage();
}

try
{
	_sesStorage = window.sessionStorage;
}
catch (err)
{
	mockSesStorage();
}

function mockLocStorage()
{
	_locStorage = {_hash: {}};
	_locStorage.setItem = (k, v)=>
	{
		_locStorage._hash[k] = v;
	}

	_locStorage.getItem = (k)=>
	{
		return _locStorage._hash[k];
	}

	_locStorage.removeItem = (k)=>
	{
		delete _locStorage._hash[k];
	}
}

function mockSesStorage()
{
	_sesStorage = {_hash: {}};
	_sesStorage.setItem = (k, v)=>
	{
		_sesStorage._hash[k] = v;
	}

	_sesStorage.getItem = (k)=>
	{
		return _sesStorage._hash[k];
	}

	_sesStorage.removeItem = (k)=>
	{
		delete _sesStorage._hash[k];
	}
}

function getStorage(t)
{
	return t == 'ses' ? _sesStorage : _locStorage;
}

/**
 * 存储数据到localStorage
 * @param k
 * @param v
 * @param t 默认localStorage,'ses' 则为sessionStorage
 */
function setData(k, v, t)
{
	getStorage(t).setItem(k, JSON.stringify(v));
}
exports.setData = setData;

/**
 * 从localStorage取数据
 * @param k
 * @param t 默认localStorage,'ses' 则为sessionStorage
 */
function getData(k, t)
{

	let v = getStorage(t).getItem(k);
	if (v == null || v == undefined || v == "null" || v == "undefined")
	{
		v = "";
		return v;
	}
	return JSON.parse(v);
}
exports.getData = getData;

/**
 * 清除指定的键值对应的数据
 * @param k
 * @param t 默认localStorage,'ses' 则为sessionStorage
 */
function delData(k, t)
{
	getStorage(t).removeItem(k)
}
exports.delData = delData;

/**
 * 清空localStorage全部数据
 * @param t 默认localStorage,'ses' 则为sessionStorage
 */
function delAllData(t)
{
//	getStorage(t).clear();
	var _removeObj = getStorage(t);
	while (_removeObj.length > 0)
	{
		_removeObj.removeItem(_removeObj.key(0));
	}
}
exports.delAllData = delAllData;


/**
 *
 * @desc  设置Cookie
 * @param {String} name
 * @param {String} value
 * @param {Number} days
 */
//function setCookie(name, value, days) {
//	var date = new Date();
//	date.setDate(date.getDate() + days);
//	document.cookie = name + '=' + value + ';expires=' + date;
//}

/**
 *
 * @desc 根据name读取cookie
 * @param  {String} name
 * @return {String}
 */
//function getCookie(name) {
//	var arr = document.cookie.replace(/\s/g, "").split(';');
//	for (var i = 0; i < arr.length; i++) {
//		var tempArr = arr[i].split('=');
//		if (tempArr[0] == name) {
//			return decodeURIComponent(tempArr[1]);
//		}
//	}
//	return '';
//}

/**
 *
 * @desc 根据name删除cookie
 * @param  {String} name
 */
//function removeCookie(name) {
//	// 设置已过期，系统会立刻删除cookie
//	setCookie(name, '1', -1);
//}