(function() {
	// every() 返回的是个boolean值
	var numbers = [1,2,3,4,5,4,3,2,1];
	var every = numbers.every(function(item,index,array) {
		return (item > 3);
	})
	// some()  返回的是个boolean值
	var some = numbers.some(function(item,index,array){
		return (item >3);
	});
	// filter()  返回的是一个数组
	var filter = numbers.filter(function(item,index,array){
		return (item<4);
	});
	// map()  返回的是一个数组
	var map = numbers.map(function(item,index,array){
		return (item*3);
	});
})();
