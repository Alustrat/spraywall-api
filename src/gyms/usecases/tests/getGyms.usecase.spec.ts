import { Test } from '@nestjs/testing';
import GetGymsGqlArgs from 'gyms/dto/args/getGyms.gql.args';
import GymsRepository from 'gyms/repositories/gyms.repository';
import { getMockGymList } from 'mocks/gyms.mock';
import GetGymsUseCase from '../getGyms.usecase';

describe('GetGymUseCase', () => {
  let getGymsUseCase: GetGymsUseCase;
  let gymsRepository: GymsRepository;
  const gymsList = getMockGymList();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        GetGymsUseCase,
        {
          provide: GymsRepository,
          useValue: {
            getList: jest.fn().mockResolvedValue(gymsList),
          },
        },
      ],
    }).compile();

    gymsRepository = module.get<GymsRepository>(GymsRepository);
    getGymsUseCase = module.get<GetGymsUseCase>(GetGymsUseCase);
  });

  describe('execute', () => {
    it('should successfully find gyms with query through repository', async () => {
      // Given
      const args = <GetGymsGqlArgs>{
        name: 'test',
        country: 'France',
        city: 'Paris',
        limit: 5,
        offset: 0,
      };
      // When
      const result = await getGymsUseCase.execute(args);
      // Then
      expect(gymsRepository.getList).toHaveBeenCalledWith(args);
      expect(result).toEqual(gymsList);
    });
  });
});
