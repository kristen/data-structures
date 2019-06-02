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
		this._end = List(value);
		if (this._start.isEmpty()) {
			this._start = this._end;
		} else {
			this._start._tail = this._end;
		}
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