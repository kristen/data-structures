import { indexOfSmallest, sort } from './selection-sort';

describe('SelectionSort', () => {
	describe('#indexOfSmallest', () => {
		it('returns -1 when there are no elements in the array', () => {
			expect(indexOfSmallest([])).toBe(-1);
		});
		it('returns 0 when there is one element in the array', () => {
			expect(indexOfSmallest([1])).toBe(0);
		});
		it('returns the index when there is more than one element in the array', () => {
			expect(indexOfSmallest([156, 141, 35, 94, 88, 61, 111])).toBe(2);
		});
	});
	describe('#sort', () => {
		it('returns an empty array when given an empty array', () => {
			expect(sort([])).toEqual([]);
		});
		it('returns the array when it has one element', () => {
			expect(sort([1])).toEqual([1]);
		});
		it('returns the array sorted when there are 2 elements', () => {
			expect(sort([156, 141]))
				.toEqual([141, 156]);
		});
		it('returns the array sorted', () => {
			expect(sort([156, 141, 35, 94, 88, 61, 111]))
				.toEqual([35, 61, 88, 94, 111, 141, 156]);
		});
	});
});