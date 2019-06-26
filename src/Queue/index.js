import { LinkedList } from '../LinkedList';

class QueueClass {
	constructor() {
		this._start = new LinkedList();
	}
	isEmpty() {
		return this._start.isEmpty();
	}
	add(value) {
		this._start.append(value);
	}
	remove() {
		// const value = this._start.headOption();
		// this._start = this._start.next;
		return this._start.removeAt(0);
	}
	peek() {
		return this._start.headOption();
	}
}

export const Queue = () => new QueueClass();