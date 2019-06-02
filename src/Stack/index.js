import { Option } from '../Option';

class StackClass {
	constructor() {
		this._stack = [];
		this._top_index = this._stack.length - 1;
	}

	top() {
		const top = this._stack[this._top_index];
		return Option.fromNullable(top);
	}

	push(value) {
		this._top_index = this._top_index + 1;
		this._stack[this._top_index] = value;
	}

	pop() {
		const top = this._stack[this._top_index];
		this._top_index = this._top_index - 1;
		return Option.fromNullable(top);
	}

	isEmpty() {
		return this._stack.length === 0;
	}
}

export const Stack = () => new StackClass();