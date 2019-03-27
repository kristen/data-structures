/**
 * Selection Sort
 * O(n^2)
 */
export const indexOfSmallest = (array) => {
	var index = -1;
	var smallestValue = array[0];
	array.forEach((item, i) => {
		if (item <= smallestValue) {
			smallestValue = item;
			index = i;
		}
	});
	return index;
};