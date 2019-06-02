import { List, Nil } from '../LinkedList';

class QueueClass {
	constructor() {
		this._start = Nil;
		this._end = Nil;
	}
	isEmpty() {
		return this._start.isEmpty();
	}
	add(value) {
		const node = List(value);
		if (this._start.isEmpty()) {
			this._start = node;
		} else {
			this._end._tail = node;
		}
		this._end = node;
	}
	remove() {
		const value = this._start.headOption();
		this._start = this._start.tail();
		return value;
	}
	peek() {
		return this._start.headOption();
	}
}

export const Queue = () => new QueueClass();