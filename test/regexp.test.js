describe('Regexp API:', function ()
{

	describe('#isEmail()', function ()
	{
		it('utils.isEmail("leiquanlive.com") should return false ', function ()
		{
			assert.notEqual(utils.isEmail("leiquanlive.com"))
		});
		it('utils.isEmail("leiquan@live.com") should return true ', function ()
		{
			assert(utils.isEmail("leiquan@live.com"))
		});
	});

	describe('#isIdCard()', function ()
	{
		it('utils.isIdCard("622224188203234033") should return true ', function ()
		{
			assert(utils.isIdCard("622224188203234033"))
		});
		it('utils.isIdCard("zas224188203234033") should return false', function ()
		{
			assert(!utils.isIdCard("leiquan@live.com"))
		});
	});

	describe('#isPhoneNum()', function ()
	{
		it('utils.isPhoneNum("18882324234") should return true ', function ()
		{
			assert(utils.isPhoneNum("18882324234"))
		});
		it('utils.isPhoneNum("8618882324234") should return true ', function ()
		{
			assert(utils.isPhoneNum("8618882324234"))
		});
		it('utils.isPhoneNum("5534553") should return false', function ()
		{
			assert(!utils.isPhoneNum("5534553"))
		});
		it('utils.isPhoneNum("19056323241") should return true', function ()
		{
			assert(utils.isPhoneNum("19056323241"))
		});
	});

	describe('#isUrl()', function ()
	{
		it('utils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function ()
		{
			assert(utils.isUrl("https://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
		});
		it('utils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1") should return true ', function ()
		{
			assert(utils.isUrl("http://www.baidu.com/s?wd=www.slane.cn&rsv_spt=1"))
		});
		it('utils.isUrl("www.baidu.com") should return true', function ()
		{
			assert(utils.isUrl("www.baidu.com"))
		});
		it('utils.isUrl("baidu.com") should return true', function ()
		{
			assert(utils.isUrl("baidu.com"))
		});
		it('utils.isUrl("http://baiducom") should return false', function ()
		{
			assert(!utils.isUrl("http://baiducom"))
		});
	});

});