import { Option } from '../Option';

class QueueClass {
	constructor() {
		this._queue = [];
		this._start = -1;
		this._end = -1;
	}
	isEmpty() {
		return this._start === this._end;
	}
	add(value) {
		this._end = this._end + 1;
		this._queue[this._end] = value;
	}
	remove() {
		this._start = this._start + 1;
		const value = this._queue[this._start];
		return Option.fromNullable(value);
	}
	peek() {
		return Option.fromNullable(this._queue[this._start + 1]);
	}
}

export const Queue = () => new QueueClass();