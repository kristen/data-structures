import { map, reduce, sum, count, max } from '.';

describe('ArrayOps', () => {
	describe('#map', () => {
		it('it never calls the function when there is an empty array', () => {
			const f = jest.fn();
			const array = [];
      
			map(array, f);

			expect(f.mock.calls.length).toBe(0);
		});
		it('iterates over a list of one element and calls a function for each element in the list', () => {
			const f = jest.fn();
			const array = [1];
      
			map(array, f);

			expect(f.mock.calls.length).toBe(array.length);
			expect(f.mock.calls[0][0]).toBe(array[0]);
		});
		it('iterates over a list and calls a function for each element in the list', () => {
			const f = jest.fn(x => x);
			const array = [1, 2, 3];
      
			const result = map(array, f);
      
			expect(f.mock.calls.length).toBe(array.length);
			expect(f.mock.calls[0][0]).toBe(array[0]);
			expect(f.mock.calls[1][0]).toBe(array[1]);
			expect(f.mock.calls[2][0]).toBe(array[2]);
			expect(result).toEqual([1,2,3]);
		});
	});
	describe('#reduce', () => {
		it('it never calls the function when there is an empty array', () => {
			const f = jest.fn();
			const array = [];
      
			const result = reduce(array, f, 0);

			expect(f.mock.calls.length).toBe(0);
			expect(result).toBe(0);
		});
		it('iterates over a list of one element and calls a function for each element in the list', () => {
			const f = jest.fn((x, y) => x + y);
			const array = [1];
			const initialValue = 0;
      
			const result = reduce(array, f, initialValue);

			expect(f.mock.calls.length).toBe(array.length);
			expect(f.mock.calls[0]).toEqual([initialValue, array[0]]);
			expect(result).toBe(1);
		});
		it('iterates over a list and calls a function for each element in the list', () => {
			const f = jest.fn((x, y) => x + y);
			const array = [1, 2, 3];
			const initialValue = 0;
      
			const result = reduce(array, f, initialValue);
      
			expect(f.mock.calls.length).toBe(array.length);
			expect(f.mock.calls[0]).toEqual([initialValue, array[0]]);
			expect(f.mock.calls[1]).toEqual([initialValue+array[0], array[1]]);
			expect(f.mock.calls[2]).toEqual([initialValue+array[0]+array[1], array[2]]);
			expect(result).toBe(6);
		});
	});
	describe('#sum', () => {
		it('returns 0 when given undefined', () => {
			const result = sum();
			expect(result).toBe(0);
		});
		it('returns 0 when there are no values in the array', () => {
			const result = sum([]);
			expect(result).toBe(0);
		});
		it('returns the sum of all elements', () => {
			const array = [1,2,3];
			expect(sum(array)).toBe(6);
		});
	});
	describe('#count', () => {
		it('returns 0 when given undefined', () => {
			const result = count();
			expect(result).toBe(0);
		});
		it('returns 0 when there are no values in the array', () => {
			const result = count([]);
			expect(result).toBe(0);
		});
		it('returns the number of elements in the array', () => {
			const array = [1,2,3];
			expect(count(array)).toBe(array.length);
		});
	});
	describe('#max', () => {
		it('returns undefined when given undefined', () => {
			const result = max();
			expect(result).toBe(undefined);
		});
		it('returns undefined when there are no values in the array', () => {
			const result = max([]);
			expect(result).toBe(undefined);
		});
		it('returns the largest element in the array', () => {
			const array = [1,2,3,2];
			expect(max(array)).toBe(3);
		});
	});
});