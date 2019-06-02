import { Stack } from '.';
import { None, Some } from '../Option';

describe('Stack', () => {
	describe('#top', () => {
		it('returns None when there is nothing in the stack', () => {
			const stack = Stack();
			expect(stack.top()).toEqual(None);
		});
		it('returns the top of the stack', () => {
			const stack = Stack();
			stack.push(1);
			expect(stack.top()).toEqual(Some(1));
		});
	});
	describe('#push', () => {
		it('returns the unmodified stack when the value is undefined', () => {
			const stack = Stack();
			stack.push();
			expect(stack.top()).toBe(None);
		});
		it('returns a new stack with the value on top', () => {
			const stack = Stack();
			stack.push(1);
			expect(stack.top()).toEqual(Some(1));
		});
	});
	describe('#pop', () => {
		it('returns None when the stack is empty', () => {
			const stack = Stack();
			expect(stack.pop()).toEqual(None);
		});
		it('removes the top of the stack and returns the value', () => {
			const stack = Stack();
			stack.push(1);
			expect(stack.top()).toEqual(Some(1));
			const result = stack.pop();
			expect(result).toEqual(Some(1));
			expect(stack.top()).toEqual(None);
		});
	});
	describe('#isEmpty', () => {
		it('returns true when the stack is empty', () => {
			const stack = Stack();
			expect(stack.isEmpty()).toBe(true);
		});
		it('returns false when the stack is empty', () => {
			const stack = Stack();
			stack.push(1);
			expect(stack.isEmpty()).toBe(false);
		});
		it('returns false when the stack is empty', () => {
			const stack = Stack();
			stack.push(1);
			stack.push();
			expect(stack.isEmpty()).toBe(false);
		});
	});
});