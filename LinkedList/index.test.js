import { Nil, List } from '.';

describe('List', () => {
	describe('Nil', () => {
		describe('#head', () => {
			it('throws an error', () => {
				expect(Nil.head).toThrow();
			});
		});
		describe('#tail', () => {
			it('throws an error', () => {
				expect(Nil.tail).toThrow();
			});
		});
	});
	describe('List', () => {
		describe('#head', () => {
			it('throws an error when the list is empty', () => {
				expect(List().head).toThrow();
			});
			it('returns the first value of the list', () => {
				const firstValue = 'value';
				expect(List(firstValue).head()).toEqual(firstValue);
			});
		});
		describe('#tail', () => {
			it('throws an error when there are 0 elements', () => {
				expect(List().tail).toThrow();
			});
			it('returns Nil when there is 1 element in the list', () => {
				expect(List('value').tail()).toBe(Nil);
			});
			it('returns a new List with all elements except for the head', () => {
				const list = List('value1', 'value2');
				expect(list.tail()).toEqual(List('value2'));
			});
		});
	});
});
