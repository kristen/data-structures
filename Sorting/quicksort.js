/**
 * Quicksort
 * worst case - O(n^2)
 * average case - O(n log n)
 */

const sortRecursive = (array) => {
	if (array.length < 2) {
		return array;
	}
	const pivotIndex = Math.round((array.length)/2);
	const pivot = array[pivotIndex];
	const left = [], right = [];
	array.forEach((element, i) => {
		if (element < pivot && pivotIndex !== i) {
			left.push(element);
		} else if (element >= pivot && pivotIndex !== i) {
			right.push(element);
		}
	});
	return [...sortRecursive(left), pivot, ...sortRecursive(right)];
};

export const sort = (array) => {
	if (array) {
		return sortRecursive([...array]);
	}
};