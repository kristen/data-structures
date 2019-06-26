import { LinkedList } from '.';
import { None, Some } from '../Option';

describe('LinkedList', () => {
	describe('#isEmtpy', () => {
		it('returns true when empty', () => {
			const l = new LinkedList();
			expect(l.isEmpty()).toBe(true);
		});
		it('returns false when nonEmpty', () => {
			const l = new LinkedList();
			l.prepend(1);
			expect(l.isEmpty()).toBe(false);
		});
		it('returns false when nonEmpty', () => {
			const l = new LinkedList();
			l.prepend(1).prepend(2);
			expect(l.isEmpty()).toBe(false);
		});
	});
	describe('#head', () => {
		it('throws when the list is empty', () => {
			const l = new LinkedList();
			expect(l.head).toThrow();
		});
		it('returns the first value of the list', () => {
			const l = new LinkedList();
			const firstValue = 'value';
			l.prepend(firstValue);
			expect(l.head()).toEqual(firstValue);
		});
	});
	describe('#append', () => {
		it('does not append when the given value is undefiend', () => {
			const l = new LinkedList().prepend(1).append(undefined);
			expect(l.head).toEqual(1);
		});
		it('adds value to end of list', () => {
			const l = new LinkedList().append(0);
			expect(l.last()).toEqual(0);
		});
		it('adds value to end of list', () => {
			const l = new LinkedList(1).append(0);
			expect(l.last()).toEqual(0);
		});
		it('adds value to end of list', () => {
			const l = new LinkedList().append(1).append(0).append(2);
			expect(l.last()).toEqual(2);
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
		it('returns Nil when the list is empty', () => {
			const l = List(0);
			const result = l.removeAt(0);
			expect(result).toEqual(Some(0));
			expect(l).toBe(Nil);
		});
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
});
