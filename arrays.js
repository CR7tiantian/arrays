(function() {
	// every() 返回的是个boolean值
	var numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
	var every = numbers.every(function(item, index, array) {
			return (item > 3); //false
		})
		// some()  返回的是个boolean值
	var some = numbers.some(function(item, index, array) {
		return (item > 3); //true
	});
	// filter()  返回的是一个数组
	var filter = numbers.filter(function(item, index, array) {
		return (item < 4); //[1,2,3,3,2,1]
	});
	// map()  返回的是一个数组
	var map = numbers.map(function(item, index, array) {
		return (item * 3); //[3,6,9,12,15,12,9,6,3]
	});
	// reduce() 
	var reduce = numbers.reduce(function(prev, cur, index, array) {
		return (prev * cur); //120*24
	});
})();
