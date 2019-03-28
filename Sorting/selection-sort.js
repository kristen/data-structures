/**
 * Selection Sort
 * O(n^2)
 */
export const indexOfSmallest = (array) => {
	return indexOfSmallestRecursive(-1, 0, array[0], array);
};

const indexOfSmallestRecursive = (acc, i, smallestValue, array) => {
	if (array && i > array.length) {
		return acc;
	}
	if (array[i] <= smallestValue) {
		return indexOfSmallestRecursive(i, i+1, array[i], array);
	} else {
		return indexOfSmallestRecursive(acc, i+1, smallestValue, array);
	}
};

export const sort = (array) => {
	const sortedArray = [];
	const initialArrayLength = array.length;
	for (var i = 0; i < initialArrayLength; i++) {
		// find index of smallest
		const smallestElementIndex = indexOfSmallest(array);
		const smallestElement = array[smallestElementIndex];
		//put element in new array in next index spot
		sortedArray[i] = smallestElement;
		// remove from other array
		array = [...array.slice(0, smallestElementIndex), ...array.slice(smallestElementIndex + 1)];
	// repeat until no more elements
	}
	// return array
	return sortedArray;
};