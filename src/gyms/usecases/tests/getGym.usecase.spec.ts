import { Test } from '@nestjs/testing';
import GymsRepository from 'gyms/repositories/gyms.repository';
import { getMockGym } from 'mocks/gyms.mock';
import GetGymUseCase from '../getGym.usecase';

describe('GetGymUseCase', () => {
  let getGymUseCase: GetGymUseCase;
  let gymsRepository: GymsRepository;
  const gymById = getMockGym();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        GetGymUseCase,
        {
          provide: GymsRepository,
          useValue: {
            getById: jest.fn().mockResolvedValue(gymById),
          },
        },
      ],
    }).compile();

    gymsRepository = module.get<GymsRepository>(GymsRepository);
    getGymUseCase = module.get<GetGymUseCase>(GetGymUseCase);
  });

  describe('execute', () => {
    it('should successfully find gym with gym id through repository', async () => {
      // Given
      // When
      const result = await getGymUseCase.execute(99);
      // Then
      expect(gymsRepository.getById).toHaveBeenCalledWith(99);
      expect(result).toEqual(gymById);
    });
  });
});
