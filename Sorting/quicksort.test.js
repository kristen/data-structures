import { sort } from './quicksort';

describe('Quicksort', () => {
	describe('#sort', () => {
		it('returns undefined when given no array', () => {
			expect(sort()).toBeUndefined();
		});
		it('returns the empty array because it is already sorted', () => {
			expect(sort([])).toEqual([]);
		});
		it('returns the single element array because it is already sorted', () => {
			expect(sort([1])).toEqual([1]);
		});
		it('returns a new sorted array with the same elements', () => {
			expect(sort([156, 141, 35, 94, 88, 61, 111]))
				.toEqual([35, 61, 88, 94, 111, 141, 156]);
		});
	});
});