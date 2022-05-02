import { gqlType } from './gql-functions';

describe('Gql functions', () => {
  describe('gqlType', () => {
    it('should return a function that return the given value', () => {
      // Given
      const value = { id: 12 };
      // When
      const result = gqlType(value);
      // Then
      expect(result()).toEqual(value);
    });
  });
});
