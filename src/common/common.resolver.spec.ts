import BaseResolver from './common.resolver';

describe('BaseResolver', () => {
  describe('getGqlType', () => {
    it('should return the type function', () => {
      // Given
      const value = { id: 12 };
      // When
      const result = BaseResolver.getGqlType(value);
      // Then
      expect(JSON.stringify(result)).toEqual(JSON.stringify(() => value));
    });
  });
});
