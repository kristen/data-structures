import { Option } from '../Option';

export class StackClass {
	constructor() {
		this._stack = [];
		this._topIndex = this._stack.length - 1;
	}

	top() {
		const top = this._stack[this._topIndex];
		return Option.fromNullable(top);
	}

	push(value) {
		this._topIndex++;
		this._stack[this._topIndex] = value;
	}

	pop() {
		const top = this._stack[this._topIndex];
		this._topIndex --;
		return Option.fromNullable(top);
	}

	isEmpty() {
		return this._stack.length === 0;
	}
}

export const Stack = () => new StackClass();
