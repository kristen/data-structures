export class NilListError extends Error {}

class NilListClass {
	head() {
		throw new NilListError('no head on Nil');
	}
	tail() {
		throw new NilListError('no tail on Nil');
	}
}
export const Nil = new NilListClass();

const constructList = (head, ...rest) => {
	if (head === undefined) {
		return Nil;
	}
	return new ListClass(head, constructList(...rest));
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
}

export const List = constructList;
