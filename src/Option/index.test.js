import { Option, Some, None } from '.';

describe('Option', () => {
	describe('None', () => {
		describe('#get', () => {
			it('throws an error', () => {
				expect(None.get).toThrow();
			});
		});
		describe('#getOrElse', () => {
			it('returns defaultValue', () => {
				const expected = 0;
				expect(None.getOrElse(expected)).toEqual(expected);
			});
		});
		describe('#isDefined', () => {
			it('returns false', () => {
				expect(None.isDefined()).toBe(false);
			});
		});
		describe('#isEmpty', () => {
			it('returns true', () => {
				expect(None.isEmpty()).toBe(true);
			});
		});
		describe('#map', () => {
			it('returns None', () => {
				expect(None.map(value => value + 1)).toEqual(None);
			});
		});
	});
	describe('Some', () => {
		describe('#get', () => {
			it('returns the wrapped value', () => {
				const value = 'value';
				expect(Some(value).get()).toBe(value);
			});
		});
		describe('#getOrElse', () => {
			it('returns the value', () => {
				const value = 10;
				expect(Some(10).getOrElse(0)).toEqual(value);
			});
		});
		describe('#isDefined', () => {
			it('returns true', () => {
				expect(Some('value').isDefined()).toBe(true);
			});
		});
		describe('#isEmpty', () => {
			it('returns false', () => {
				expect(Some('value').isEmpty()).toBe(false);
			});
		});
		describe('#map', () => {
			it('returns Some with the function applied to the value', () => {
				const value = 1;
				const f = v => v + 1;
				const expected = f(value);
				expect(Some(value).map(f)).toEqual(Some(expected));
			});
		});
	});
	describe('#fromNullable', () => {
		it('returns None when the value is null', () => {
			expect(Option.fromNullable(null)).toBe(None);
		});
		it('returns None when the value is undefined', () => {
			expect(Option.fromNullable(undefined)).toBe(None);
		});
		it('returns Some(value) when there is a value', () => {
			expect(Option.fromNullable('value')).toEqual(Some('value'));
		});
	});
});
