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
	return sortRecursive(array, []);
};

const sortRecursive = (array, sortedArray) => {
	if (array && array.length === 0) {
		return sortedArray;
	}
	const smallestElementIndex = indexOfSmallest(array);
	return sortRecursive(
		[...array.slice(0, smallestElementIndex), ...array.slice(smallestElementIndex + 1)],
		[...sortedArray, array[smallestElementIndex]]);
};