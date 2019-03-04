///////////////////////////////////countUpAndDown
function countUpAndDown(n) {

	console.log('Going Up');
	//// O(n) n grows
	for (let i = 0; i < n; i++) {
		console.log(i);
	};

	console.log(n + " " + "Hello");
	//// O(n) n grows
	for (let j = n - 1; j >= 0; j--) {
		console.log(j);
	}
	console.log("Back down. Peace");
}
countUpAndDown(500000);

/////////////////////////////////////printAllPairs
// O(n2) nested for loop 
function printAllPairs(n) {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			console.log(i, j);
		}
	}
}
printAllPairs(5);

//// Prints minimun or up to number being passed 
//This is O(n) as n grows the number of operations grows
function max5(n) {
	for (let i = 0; i <= Math.max(5, n); i++) {
		console.log(i);
	}
}
max5(6);


/////// This is O(1) which is constant
function max5(n) {
	for (let i = 0; i <= Math.min(30, n); i++) {
		console.log(i);
	}
}
max5(5);