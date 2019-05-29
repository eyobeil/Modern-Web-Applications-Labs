

// Uses process.nextTick()

Array.prototype.plunk1 = function(value) {
	process.nextTick(() => {
		const result = Math.max.apply(null, this);
		console.log(result);
	});
};
Array.prototype.plunk2 = function(value) {
	setImmediate(() => {
		const result = Math.min.apply(null, this);
		console.log(result);
	});
};

console.log('start');
[ 1, 2, 3, 4, 5, 6, 7, 8 ].plunk1(true);
[ 1, 2, 3, 4, 5, 6, 7, 8 ].plunk2(false);
console.log('end');