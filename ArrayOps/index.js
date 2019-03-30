import { None, Some } from '../Option';

const mapRecursive = (arr, f, result) => {
	if (arr.length === 0) {
		return result;
	}
	const [head] = arr.splice(0, 1);
	return mapRecursive(arr, f, [...result, f(head)]);
};

export const map = (arr, f) => {
	return mapRecursive([...arr], f, []);
};

export const reduceRecursive = (arr, f, acc) => {
	if (arr.length === 0) {
		return acc;
	}
	const [head] = arr.splice(0, 1);
	const result = f(acc, head);
	return reduceRecursive(arr, f, result);
};

export const reduce = (arr, f, initialValue) => {
	return reduceRecursive([...arr], f, initialValue);
};

export const sum = (arr) => {
	return reduce(arr || [], (x, y) => x + y, 0);
};

export const count = (arr) => {
	return reduce(arr || [], x => x + 1, 0);
};

export const max = (arr) => {
	const maxValue = (x, y) => {
		if (x >= y) return x;
		return y;
	};
	if (arr && arr.length) {
		const copy = [...arr];
		const [head] = copy.splice(0, 1);
		return reduce(copy, maxValue, head);
	}
};

const binarySearchRecursive = (arr, x, minIndex, maxIndex) => {
	if (minIndex > maxIndex) {
		return None;
	}
	const midIndex = Math.round((minIndex + maxIndex)/2);
	if (x === arr[midIndex]) {
		return Some(midIndex);
	} else if (x < arr[midIndex]) {
		return binarySearchRecursive(arr, x, minIndex, midIndex - 1);
	}
	return binarySearchRecursive(arr, x, midIndex + 1, maxIndex);
};

export const binarySearch = (arr, x) => {
	if (arr && arr.length) {
		return binarySearchRecursive(arr, x, 0, arr.length);
	}
	return None;
};