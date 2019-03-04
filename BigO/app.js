//Create function that passes in a number. Then gets added by 1 return total,
////////////////////////////////////////////////////1
function addUpTo(n) {
	let total = 0;
	for (let i = 1; i <= n; i++) {
		total += i;
	}
	return total;
}
var t1 = performance.now();
addUpTo(70000000);
var t2 = performance.now();
console.log(`time elapsed ${(t2 - t1) / 1000} seconds`);
// 1, 3, 6, 10, 15,21,28
//console.log(addUpTo(7));

////////////////////////////////////////////////////or 

// Constant
function addUpToShort(n) {
	return n * (n + 1) / 2;
}
// 1, 3, 6, 10, 15,21,28
//console.log(addUpToShort(5));
// var t1 = performance.now();
// addUpToShort(70000000);
// var t2 = performance.now();
// console.log(`time elapsed ${(t2 - t1) / 1000} seconds`);