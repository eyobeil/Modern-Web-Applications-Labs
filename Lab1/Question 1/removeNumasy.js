Array.prototype.removeNum= function(number) {
	setTimeout(() => {
		const result = this.filter((element) => element != number);
		console.log(result);
	},5000);
};

console.log('start');
[ 1, 3, 4, 2, 1, 5].removeNum(1);
console.log('finish');