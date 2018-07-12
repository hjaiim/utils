/**
 * Created by haojun on 2018/7/12.
 */
describe('Data API:', function () {
	describe('#getData()', function () {
		before(function () {
			utils.data.setData('test', 'getTestValue')
		})
		it(`utils.data.setData('test', 'getTestValue') should return true`, function () {
			assert(utils.data.getData('test') === 'getTestValue')
		})
		it(`utils.data.getCookie('empty', '') should return true`, function () {
			assert(utils.data.getData('empty') === '')
		})
		after(function () {
			utils.data.delData('test')
		})
	})

	describe('#delData()', function () {
		before(function () {
			utils.data.setData('test', 'delTestValue')
		})
		it(`utils.data.delData('test') should return false`, function () {
			utils.data.delData('test')
			assert.notEqual(utils.data.getData('test') === 'delTestValue',true)
		})
	})

	describe('#setData()', function () {
		it(`utils.data.getData('test', 'setData') should return true`, function () {
			utils.data.setData('test', 'setData')
			assert(utils.data.getData('test') === 'setData')
		})
		after(function () {
			utils.data.delData('test')
		})
	})
})