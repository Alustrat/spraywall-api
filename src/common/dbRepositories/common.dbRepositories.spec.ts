import DbRepository from './common.dbRepositories';

describe('DbRepository', () => {
  let dbRepository: DbRepository<null>;

  beforeEach(async () => {
    // Init testing module
    dbRepository = new DbRepository();
  });

  describe('getPaginationWithObjectsAndCount', () => {
    it('should succesfully build a pagination object', () => {
      // Given
      const expectedResult = {
        total: 130,
        remaining: 115,
        rows: 10,
      };
      // Then
      const result = dbRepository.getPaginationWithObjectsAndCount(
        { offset: 5, limit: 10 },
        10,
        130,
      );
      // When
      expect(result).toEqual(expectedResult);
    });

    it('should work when we are at the end of the pagination', () => {
      // Given
      const expectedResult = {
        total: 130,
        remaining: 0,
        rows: 10,
      };
      // Then
      const result = dbRepository.getPaginationWithObjectsAndCount(
        { offset: 120, limit: 20 },
        10,
        130,
      );
      // When
      expect(result).toEqual(expectedResult);
    });
  });
});
