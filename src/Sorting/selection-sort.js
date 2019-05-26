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
	const copy = [...array];
	for (var i = 0; i < array.length; i++) {
		const [smallestElement] = copy.splice(indexOfSmallest(copy), 1);
		sortedArray[i] = smallestElement;
	}
	return sortedArray;
};

const sortRecursiveLoop = (array, sortedArray) => {
	if (array && array.length === 0) {
		return sortedArray;
	}
	const [smallestElement] = array.splice(indexOfSmallest(array), 1);
	return sortRecursiveLoop(
		[...array],
		[...sortedArray, smallestElement]);
};

export const sortRecursive = (array) => {
	return sortRecursiveLoop([...array], []);
};