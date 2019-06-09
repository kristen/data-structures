import { Option, None } from '../Option';

export class StackClass {
	constructor() {
		this._stack = [];
		this._topIndex = - 1;
	}

	top() {
		if (this._topIndex < 0) return None;
		return Option.fromNullable(this._stack[this._topIndex]);
	}

	push(value) {
		this._stack[++this._topIndex] = value;
	}

	pop() {
		if (this._topIndex < 0) return None;
		const value = this._stack[this._topIndex];
		this._stack[this._topIndex] = undefined;
		this._topIndex--;
		return Option.fromNullable(value);
	}

	isEmpty() {
		return this._topIndex < 0;
	}

	size() {
		return this._topIndex + 1;
	}
}

StackClass.prototype.toString = function() {
	return `[${this._stack.join(',')}`;
};

export const Stack = () => new StackClass();
