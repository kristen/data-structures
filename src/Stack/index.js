import { None, Some, Option } from '../Option';

function StackClass(items) {
	var _top = items._length - 1;
	var _stack = items;

	this.top = () => {
		return Option.fromNullable(_stack[_top]);
	};

	this.push = (value) => {
		if (value !== undefined) {
			_top = _top + 1;
			_stack[_top] = value;
		}
	};

}

export const Stack = (...items) => new StackClass(items);