describe('Favorite Food Filter', function () {
	var $controller;
	var people = [
		{name: 'bob', favoriteFood: 'pizza', id: 1},
		{name: 'bill', favoriteFood: 'tacos', id: 2},
		{name: 'beau', favoriteFood: 'pasta', id: 3},
		{name: 'lloyd', favoriteFood: 'sushi', id: 4}
	]

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	beforeEach(inject(function($filter) {
		favoriteFood = $filter('favoriteFood')
	}));

	it('should return only favorite foods', function() {
		expect(favoriteFood(people, "pizza")[0].id).toBe(1);
	})
});
