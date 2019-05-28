import { Option, None } from '../Option';

export class NilListError extends Error {}

class NilListClass {
	isEmpty() {
		return true;
	}
	nonEmpty() {
		return !this.isEmpty();
	}
	head() {
		throw new NilListError('Nil.head is not allowed');
	}
	headOption() {
		return None;
	}
	tail() {
		return Nil;
	}
	prepend(value) {
		return List(value);
	}
}
const nilToString = () => {
	return 'Nil';
};
NilListClass.prototype.toString = nilToString;
export const Nil = new NilListClass();

const constructList = (items, acc) => {
	const last = items[items.length - 1];
	if (last === undefined) {
		return acc;
	}
	const rest = items.slice(0, items.length - 1);
	const tail = new ListClass(last, acc);
	return constructList(rest, tail);
};

class ListClass {
	constructor(head, tail) {
		this._head = head;
		this._tail = tail;
	}
	isEmpty() {
		return false;
	}
	nonEmpty() {
		return !this.isEmpty();
	}
	head() {
		return this._head;
	}
	headOption() {
		return Option.fromNullable(this._head);
	}
	tail() {
		return this._tail;
	}
	prepend(value) {
		if (value === undefined) {
			return this;
		}
		return new ListClass(value, this);
	}
}
ListClass.prototype.toString = function listToString() {
	const loop = (acc, rest) => {
		if (rest.headOption() === None) {
			return acc;
		} else {
			return loop(acc.concat([rest.head()]), rest.tail());
		}
	};
	const listItems = loop([], this);
	return `List(${listItems.join(',')})`;
};
export const List = (...items) => constructList(items, Nil);
