import { Queue } from '.';
import { None, Some } from '../Option';

describe('Queue', () => {
	describe('#isEmpty', () => {
		it('returns true when the queue is empty', () => {
			const queue = Queue();
			expect(queue.isEmpty()).toBe(true);
		});
		it('returns false when the queue has elements', () => {
			const queue = Queue();
			queue.add(1);
			expect(queue.isEmpty()).toBe(false);
		});
		it('returns false when the queue has elements', () => {
			const queue = Queue();
			queue.add(1);
			queue.add();
			expect(queue.isEmpty()).toBe(false);
		});
		it('returns true when you remove all the elements', () => {
			const queue = Queue();
			queue.add(1);
			queue.remove();
			expect(queue.isEmpty()).toBe(true);
		});
	});
	describe('#add', () => {
		it('adds value to the end of the queue', () => {
			const queue = Queue();
			queue.add(1);
			expect(queue.peek()).toEqual(Some(1));
		});
		it('can add more than one value to the queue', () => {
			const queue = Queue();
			queue.add(1);
			queue.add(2);
			expect(queue.peek()).toEqual(Some(1));
			expect(queue.remove()).toEqual(Some(1));
			expect(queue.peek()).toEqual(Some(2));
		});
	});
	describe('#remove', () => {
		it('removes value from the start of the queue', () => {
			const queue = Queue();
			queue.add(1);
			expect(queue.peek()).toEqual(Some(1));
			const value = queue.remove();
			expect(queue.peek()).toBe(None);
			expect(value).toEqual(Some(1));
		});
		it('is empty when you remove all elements', () => {
			const queue = Queue();
			queue.add(1);
			expect(queue.peek()).toEqual(Some(1));
			expect(queue.isEmpty()).toEqual(false);
			expect(queue.remove()).toEqual(Some(1));
			expect(queue.isEmpty()).toEqual(true);
			queue.add(2);
			expect(queue.peek()).toEqual(Some(2));
			expect(queue.remove()).toEqual(Some(2));
			expect(queue.isEmpty()).toEqual(true);
		});
	});
});