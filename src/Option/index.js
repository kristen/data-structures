class NoneOptionError extends Error {}

/**
 * None
 */
class NoneClass {
	get() {
		throw new NoneOptionError('None.get is not allowed');
	}
	getOrElse(defaultValue) {
		return defaultValue;
	}
	isDefined() {
		return false;
	}
	isEmpty() {
		return true;
	}
	// eslint-disable-next-line no-unused-vars
	map(_f) {
		return None;
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
	// eslint-disable-next-line no-unused-vars
	getOrElse(_defaultValue) {
		return this._value;
	}
	isDefined() {
		return true;
	}
	isEmpty() {
		return false;
	}
	map(f) {
		return Some(f(this._value));
	}
}

export const Some = (value) => new SomeClass(value);

/**
 * Option
 */

export class Option {
	static fromNullable(maybeValue) {
		if (maybeValue === null || maybeValue === undefined) {
			return None;
		}
		return Some(maybeValue);
	}
}