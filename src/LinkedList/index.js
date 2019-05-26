export class NilListError extends Error {}

class NilListClass {
	head() {
		return Nil;
	}
	tail() {
		return Nil;
	}
	prepend(value) {
		return List(value);
	}
}
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
	head() {
		return this._head;
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

export const List = (...items) => constructList(items, Nil);
