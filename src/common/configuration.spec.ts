import schema from './configuration';

describe('Joi schema', () => {
  it('should validate a filled config', () => {
    // Given
    const args = {
      DATABASE_URL: 'mysql.randome:string@host',
    };
    // When
    const { error } = schema.validate(args);
    // Then
    expect(error).toBeUndefined();
  });

  it('should throw error when a required param is missing', () => {
    // Given
    const args = {};
    // When
    const { error } = schema.validate(args);
    // Then
    expect(error).toBeDefined();
  });

  it('should fill default values', () => {
    // Given
    const args = {
      DATABASE_URL: 'mysql.randome:string@host',
    };
    // When
    const { value } = schema.validate(args);
    // Then
    expect(value.NODE_ENV).toBeDefined();
    expect(value.API_PORT).toBeDefined();
  });
});
