import { Option } from '../Option';

/**
 * Node
 */
class NodeClass {
	constructor(value, next) {
		this._value = value;
		this._next = Option.fromNullable(next);
	}

	get value() {
		return this._value;
	}
  
	get next() {
		return this._next;
	}
}

export const Node = (value, next) => new NodeClass(value, next);
