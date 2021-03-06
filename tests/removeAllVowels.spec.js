describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	beforeEach(inject(function($filter) {
		removeAllVowels = $filter('removeAllVowels');
	}));

	it('should remove vowels from word', function() {
		expect(removeAllVowels('hello')).toEqual('hll');
	});

	it('should remove all vowels from sentence', function() {
		expect(removeAllVowels('Well, hello there Adam!')).toEqual('Wll, hll thr dm!');
	});
});
