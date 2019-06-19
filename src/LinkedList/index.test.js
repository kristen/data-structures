import { Nil, List } from '.';
import { None, Some } from '../Option';

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
		describe('#append', () => {
			it('does not append when the given value is undefined', () => {
				const value = undefined;
				const l = Nil.append(value);
				expect(l).toEqual(Nil);
			});
			it('returns the list with the value at the end', () => {
				const value = 2;
				const l = Nil.append(value);
				expect(l).toEqual(List(value));
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
		describe('#removeAt', () => {
			it('returns None and the list is unchanged', () => {
				const l = Nil;
				const result = l.removeAt(0);
				expect(result).toBe(None);
				expect(l).toBe(Nil);
			});
			it('returns None and the list is unchanged', () => {
				const l = Nil;
				const result = l.removeAt(1);
				expect(result).toBe(None);
				expect(l).toBe(Nil);
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
		describe('#append', () => {
			it('does not append when the given value is undefiend', () => {
				const l = List(1,2,3).append(undefined);
				expect(l).toEqual(List(1,2,3));
			});
			it('adds value to end of list', () => {
				const l = List().append(0);
				expect(l).toEqual(List(0));
			});
			it('adds value to end of list', () => {
				const l = List(1).append(0);
				expect(l).toEqual(List(1,0));
			});
			it('adds value to end of list', () => {
				const l = List(1).append(0).append(2);
				expect(l).toEqual(List(1,0,2));
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
		describe('#removeAt', () => {
			it('returns None when index is less than 0', () => {
				const l = List(0,1,2,3);
				const result = l.removeAt(-1);
				expect(result).toEqual(None);
				expect(l).toEqual(List(0,1,2,3));
			});
			it('returns the element at index 0 and removes it from the list', () => {
				const l = List(0,1,2,3);
				const result = l.removeAt(0);
				expect(result).toEqual(Some(0));
				expect(l).toEqual(List(1,2,3));
			});
			it('returns the element at index 1 and removes it from the list', () => {
				const l = List(0,1,2,3);
				const result = l.removeAt(1);
				expect(result).toEqual(Some(1));
				expect(l).toEqual(List(0,2,3));
			});
			it('returns the element at index 2 and removes it from the list', () => {
				const l = List(0,1,2,3);
				const result = l.removeAt(2);
				expect(result).toEqual(Some(2));
				expect(l).toEqual(List(0,1,3));
			});
			it('returns the element at index 3 and removes it from the list', () => {
				const l = List(0,1,2,3);
				const result = l.removeAt(3);
				expect(result).toEqual(Some(3));
				expect(l).toEqual(List(0,1,2));
			});
			it('returns None at index > length of list', () => {
				const l = List(0,1,2,3);
				const result = l.removeAt(4);
				expect(result).toEqual(None);
				expect(l).toEqual(List(0,1,2,3));
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
			it('handles circular linked lists', () => {
				const list = List(1,2,3,4,5,6);
				let p = list;
				let tail = list;
				let i = 0;
				while (tail.tail().nonEmpty()) {
					tail = tail.tail();
					if (i < 2) {
						i++;
						p = p.tail();
					}
				}
				tail._tail = p;
				const result = list.toString();
				expect(result).toEqual('List(1,2,3,4,5,6,loop([2]))');
			});
		});
	});
});
