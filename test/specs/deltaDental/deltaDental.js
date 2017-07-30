var assert = require('assert');

describe('Delta Dental page', function() {
	it('should launch login page for Delta Dental', function () {
		browser.url('https://www.deltadental.com/Public/index.jsp')
		.windowHandleSize({width: 1440, height: 900});
		var title = browser.getTitle();
		assert.equal(title, 'Employee Benefits and Individual Dental Insurance | Delta Dental');

		browser.click('input[name="username"]')
				.clearElement('input[name="username"]')
				.setValue('input[name="username"]', 'enterYourUsername')
				.clearElement('input[name="password"]')
				.setValue('input[name="password"]', 'enterYourPassword')
				.click('input[value="Login"]');

		var welcomePage = browser.getText('#logo>h2');
		assert.equal(welcomePage, 'Delta Dental Plans Association');
	});

	it('should take you to Child Health page', function () {
		var oralHealth = $('.primaryNavLast>a');
		oralHealth.click();

		var url = browser.getUrl();
		assert.equal(url, 'http://oralhealth.deltadental.com/');
		});

	it('should take you to Older Adult page', function () {
		var olderAdultTab = $('#SiteNavList>li>h3>a[href="/OlderAdult/"]');
		olderAdultTab.click();
		var url = browser.getUrl();
		assert.equal(url, 'http://oralhealth.deltadental.com/OlderAdult/');
	});

	it('should take you to Dental Procedures for Older Adults', function () {
		var dentalProcedures = $('#SiteNavList>li>ul>li>a[href="/OlderAdult/Procedures/"]');
		dentalProcedures.click();
		var url = browser.getUrl();
		assert.equal(url, 'http://oralhealth.deltadental.com/OlderAdult/Procedures/');
	});

});