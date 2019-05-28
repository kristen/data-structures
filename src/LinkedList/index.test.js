import { Nil, List } from '.';
import { None } from '../Option';

describe('List', () => {
	describe('Nil', () => {
		describe('#isEmtpy', () => {
			it('returns true', () => {
				expect(Nil.isEmpty()).toBe(true);
			});
		});
		describe('#nonEmpty', () => {
			it('returns false', () => {
				expect(Nil.nonEmpty()).toBe(false);
			});
		});
		describe('#head', () => {
			it('throws NilListError', () => {
				expect(Nil.head).toThrow();
			});
		});
		describe('#headOption', () => {
			it('returns None', () => {
				expect(Nil.headOption()).toBe(None);
			});
		});
		describe('#tail', () => {
			it('returns Nil', () => {
				expect(Nil.tail()).toBe(Nil);
			});
		});
		describe('#prepend', () => {
			it('returns the list when the value is undefined', () => {
				expect(Nil.prepend()).toBe(Nil);
			});
			it('returns a new list with that new value', () => {
				const newValue = 0;
				expect(Nil.prepend(newValue)).toEqual(List(newValue));
			});
		});
		describe('#toString', () => {
			it('returns a string representation', () => {
				expect(Nil.toString()).toEqual('Nil');
			});
		});
	});
	describe('List', () => {
		describe('#isEmtpy', () => {
			it('returns true when empty', () => {
				expect(List().isEmpty()).toBe(true);
			});
			it('returns false when nonEmpty', () => {
				expect(List(1).isEmpty()).toBe(false);
			});
			it('returns false when nonEmpty', () => {
				expect(List(1,2,3,4).isEmpty()).toBe(false);
			});
		});
		describe('#nonEmpty', () => {
			it('returns false when empty', () => {
				expect(List().nonEmpty()).toBe(false);
			});
			it('returns true when nonEmpty', () => {
				expect(List(1).nonEmpty()).toBe(true);
			});
			it('returns true when nonEmpty', () => {
				expect(List(1,2,3,4).nonEmpty()).toBe(true);
			});
		});
		describe('#head', () => {
			it('throws when the list is empty', () => {
				expect(List().head).toThrow();
			});
			it('returns the first value of the list', () => {
				const firstValue = 'value';
				expect(List(firstValue).head()).toEqual(firstValue);
			});
		});
		describe('#tail', () => {
			it('returns Nil when there are 0 elements', () => {
				expect(List().tail()).toBe(Nil);
			});
			it('returns Nil when there is 1 element in the list', () => {
				expect(List('value').tail()).toBe(Nil);
			});
			it('returns a new List with all elements except for the head', () => {
				const list = List('value1', 'value2');
				expect(list.tail()).toEqual(List('value2'));
			});
		});
		describe('#prepend', () => {
			it('returns the list when the value is undefined', () => {
				expect(List(1).prepend()).toEqual(List(1));
			});
			it('inserts a value at the head of the list', () => {
				expect(List(1,2,3).prepend(0)).toEqual(List(0,1,2,3));
			});
		});
		describe('#toString', () => {
			it('returns a string representation', () => {
				expect(List(1).toString()).toEqual('List(1)');
			});
			it('returns a string representation', () => {
				expect(List(1,2).toString()).toEqual('List(1,2)');
			});
			it('returns a string representation', () => {
				expect(List(1,2,3,4).toString()).toEqual('List(1,2,3,4)');
			});
		});
	});
});
