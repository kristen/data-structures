import { Option, None } from '../Option';

class EmptyLinkedListError extends Error {
	constructor(message) {
		super(message);
		this.name = 'EmptyLinkedListError';
	}
}

class Node {
	constructor(value, next) {
		this.value = value;
		this.next = next;
	}
}

export class LinkedList {
	constructor() {
		this.head = undefined;
		this.tail = undefined;
	}
	isEmpty() {
		return this.head === undefined;
	}
	head() {
		if (this.head === undefined) {
			throw new EmptyLinkedListError('head on empty list not allowed');
		}
		return this.head.value;
	}
	headOption() {
		return Option.fromNullable(this.head.value);
	}
	last() {
		if (this.tail === undefined) {
			throw new EmptyLinkedListError('tail on empty list not allowed');
		}
		return this.tail.value;
	}
	lastOption() {
		return Option.fromNullable(this.tail.value);
	}
	prepend(value) {
		const node = new Node(value, this.head);
		if (this.head === undefined) {
			this.tail = node;
		}
		this.head = node;
		return this;
	}
	append(value) {
		const node = new Node(value);
		if (this.tail) {
			this.tail.next = node;
			this.tail = node;
		} else {
			this.head = node;
			this.tail = node;
		}
		return this;
	}
	removeAt(index) {
		let prev = this.head;
		let nodeToRemove = this.head;
		for (let i = 0; i < index - 1; i++) {
			if (prev.next) { // if there is no prev.next, then out of bounds
				prev = prev.next;
				nodeToRemove = nodeToRemove.next;
			}
		}
		if (nodeToRemove.next) {
			// iterate once more to be at the node to remove and leave prev one prev
			nodeToRemove = nodeToRemove.next;
			if (prev === nodeToRemove) {
				// at head of list
				this.head = nodeToRemove.next;
			} else {
				prev.next = nodeToRemove.next;
			}
			nodeToRemove.next = undefined;
			return Option.fromNullable(nodeToRemove.value);
		}
		return None;
	}
}
