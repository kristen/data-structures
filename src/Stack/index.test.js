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
		it('can pop multiple times', () => {
			const stack = Stack();
			stack.push(1);
			stack.push(2);
			expect(stack.pop()).toEqual(Some(2));
			expect(stack.pop()).toEqual(Some(1));
		});
		it('removes the underlying value from the stack', () => {
			const stack = Stack();
			stack.push(1);
			stack.pop();
			expect(stack._stack[0]).toBeUndefined();
		});
	});
	describe('#isEmpty', () => {
		it('returns true when the stack is empty', () => {
			const stack = Stack();
			expect(stack.isEmpty()).toBe(true);
		});
		it('returns false when the stack has elements', () => {
			const stack = Stack();
			stack.push(1);
			expect(stack.isEmpty()).toBe(false);
		});
		it('returns false when the stack has elements', () => {
			const stack = Stack();
			stack.push(1);
			stack.push();
			expect(stack.isEmpty()).toBe(false);
		});
		it('returns true after you remove all elements', () => {
			const stack = Stack();
			stack.push(1);
			stack.pop();
			expect(stack.isEmpty()).toBe(true);
		});
	});
	describe('#size', () => {
		it('returns the size', () => {
			expect(Stack().size()).toBe(0);
		});
		it('returns the size', () => {
			const stack = Stack();
			stack.push(1);
			expect(stack.size()).toBe(1);
		});
		it('returns the size', () => {
			const stack = Stack();
			stack.push(1);
			stack.pop();
			expect(stack.size()).toBe(0);
		});
		it('returns the size', () => {
			const stack = Stack();
			stack.push(1);
			stack.pop();
			stack.pop();
			expect(stack.size()).toBe(0);
		});
		it('returns the size', () => {
			const stack = Stack();
			const expectedSize = 13;
			for(let i = 0; i < expectedSize; i++) {
				stack.push(i);
			}
			expect(stack.size()).toBe(expectedSize);
		});
	});
	describe('#toString', () => {
		it('returns a string representation of a stack', () => {
			const stack = Stack();
			expect(stack.toString()).toEqual('[');
		});
		it('returns a string representation of a stack', () => {
			const stack = Stack();
			stack.push(0);
			stack.pop();
			expect(stack.toString()).toEqual('[');
		});
		it('returns a string representation of a stack', () => {
			const stack = Stack();
			stack.push(0);
			expect(stack.toString()).toEqual('[0');
		});
		it('returns a string representation of a stack', () => {
			const stack = Stack();
			stack.push(0);
			stack.push(1);
			expect(stack.toString()).toEqual('[0,1');
		});
		it('returns a string representation of a stack', () => {
			const stack = Stack();
			stack.push(0);
			stack.push(1);
			stack.push(2);
			stack.push(3);
			stack.push(4);
			stack.push(5);
			expect(stack.toString()).toEqual('[0,1,2,3,4,5');
		});
		it('returns a string representation of a stack', () => {
			const stack = Stack();
			stack.push(0);
			stack.push(1);
			stack.push(2);
			stack.push(3);
			stack.push(4);
			stack.push(5);
			stack.pop();
			stack.pop();
			expect(stack.toString()).toEqual('[0,1,2,3');
		});
	});
});