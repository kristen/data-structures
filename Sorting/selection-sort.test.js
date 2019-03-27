import { indexOfSmallest } from './selection-sort';

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
});