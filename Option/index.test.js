import { Option, Some, None } from '.';

describe('Option', () => {
	describe('None', () => {
		describe('#get', () => {
			it('throws an error', () => {
				expect(None.get).toThrow();
			});
		});
		describe('#isDefined', () => {
			it('returns false', () => {
				expect(None.isDefined()).toBe(false);
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
		describe('#isDefined', () => {
			it('returns true', () => {
				expect(Some('value').isDefined()).toBe(true);
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
