class NoneOptionError extends Error {}

/**
 * None
 */
class NoneClass {
	get() {
		throw new NoneOptionError('None.get is not allowed');
	}
	isDefined() {
		return false;
	}
}

export const None = new NoneClass();

/**
 * Some(value)
 */

class SomeClass {
	constructor(value) {
		this._value = value;
	}
	get() {
		return this._value;
	}
	isDefined() {
		return true;
	}
}

export const Some = (value) => new SomeClass(value);

/**
 * Option
 */

export class Option {
	static fromNullable(maybeValue) {
		if(maybeValue === null || maybeValue === undefined) {
			return None;
		}
		return Some(maybeValue);
	}
}