import { Node } from '.';
import { None, Some } from '../Option';

describe('LinkedList', () => {
	describe('Node', () => {
		describe('#value', () => {
			it('stores a value', () => {
				const value = 'Hi';
				const node = Node(value);
				expect(node.value).toBe(value);
			});
		});
		describe('#next', () => {
			it('returns None when there is no next Node', () => {
				const node = Node('value');
				expect(node.next).toBe(None);
			});
			it('returns a Node when there is a next Node set', () => {
				const next = Node('value2');
				const node = Node('value1', next);
				expect(node.next).toEqual(Some(next));
			});
		});
	});
});
