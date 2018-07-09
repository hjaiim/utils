/**
 * Created by haojun on 2018/7/9.
 */
describe('Event API:', function ()
{
	describe('#event.addEventListenerOnce()', function ()
	{
		before(function ()
		{
			utils.event.removeAllListener('test1');
			utils.event.addEventListenerOnce('test1', function (type, str)
			{
				console.log(str);
			})
		})
		it(`utils.event.addEventListenerOnce should return 我是派发参数1`, function ()
		{
			utils.event.dispatchEvent('test1', '我是派发参数1');
		});
		it(`utils.event.addEventListenerOnce should not return 我是派发参数2`, function ()
		{
			utils.event.dispatchEvent('test1', '我是派发参数2');
		});
	});

	describe('#event.addEventListener()', function ()
	{
		before(function ()
		{
			utils.event.removeAllListener('test2');
			utils.event.addEventListener('test2', function (type, str)
			{
				console.log(str);
			})
		})
		it(`utils.event.addEventListenerOnce should return 我是派发参数1`, function ()
		{
			utils.event.dispatchEvent('test2', '我是派发参数1');
		});
		it(`utils.event.addEventListenerOnce should return 我是派发参数2`, function ()
		{
			utils.event.dispatchEvent('test2', '我是派发参数2');
		});
	});
});