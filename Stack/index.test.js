import { Stack } from '.';
import { None, Some } from '../Option';

describe('Stack', () => {
	describe('#top', () => {
		it('returns None when there is nothing in the stack', () => {
			expect(Stack().top()).toBe(None);
		});
		it('returns the top of the stack', () => {
			expect(Stack(1).top()).toEqual(Some(1));
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
		// it('adds a value to the top of the stack and returns the new stack', () => {
		// 	const stack = Stack();
		// 	expect(stack.push(1)).toEqual(Stack(1));
		// });
	});
});