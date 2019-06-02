import { Option } from '../Option';

class StackClass {
	constructor() {
		this._stack = [];
	}

	top() {
		const top = this._stack[this._stack.length - 1];
		return Option.fromNullable(top);
	}

	push(value) {
		this._stack[this._stack.length] = value;
	}

	pop() {
		const top = this._stack[this._stack.length - 1];
		this._stack[this._stack.length - 1] = undefined;
		return Option.fromNullable(top);
	}

	isEmpty() {
		return this._stack.length === 0;
	}
}

export const Stack = () => new StackClass();