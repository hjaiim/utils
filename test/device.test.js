/**
 * Created by haojun on 2018/4/28.
 */
describe('Device API:', function ()
{
	describe('#getExplore()', function ()
	{
		it(`utils.getExplore() should return "Chrome"`, function ()
		{
			console.log(`Explore:${utils.getExplore()}`)
			assert(/^Chrome:/.test(utils.getExplore()))
		});
	});

	describe('#getOS()', function ()
	{
		it(`utils.getOS() should return "MacOSX"`, function ()
		{
			console.log(`OS:${utils.getOS()}`)
			assert(utils.getOS() === 'windows' || utils.getOS() === 'MacOSX' || utils.getOS() === 'linux')
		});
	});
});