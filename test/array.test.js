/**
 * Created by haojun on 2018/4/28.
 */
describe('Array API:', function ()
{
	describe('#arrayEqual()', function ()
	{
		it(`utils.arrayEqual([0, 2, 3, 4], [1, 2, 3]) should return false`, function ()
		{
			assert.notEqual(true, utils.arrayEqual([0, 2, 3, 4], [1, 2, 3]))
		});

		it(`utils.arrayEqual([0, 2, 3], [1, 2, 3]) should return false`, function ()
		{
			assert.notEqual(true, utils.arrayEqual([0, 2, 3], [1, 2, 3]))
		});

		it('utils.arrayEqual([1, 2, 3], [1, 2, 3]) should return true', function ()
		{
			assert(utils.arrayEqual([1, 2, 3], [1, 2, 3]))
		});

		const arr = [8, 2, 3, 4, 7, 8]
		it(`utils.arrayEqual([${arr},${arr}]) should return true`, function ()
		{
			assert(utils.arrayEqual(arr, arr))
		});
	});
});