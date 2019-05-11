function sortingArray(input) {
	const data = input;
	for (let i=0; i<data.length; i++) {
		data[i].sort();
	}
	data.sort(function(a, b) {
		return a.length - b.length;
	});
	return data;
}

const myArr = [['e','g'], ['x', 'w', 'e']];
console.log(sortingArray(myArr));