import { Test } from '@nestjs/testing';
import GymsRepository from 'gyms/repositories/gyms.repository';
import { getMockGym } from 'mocks/gyms.mock';
import DeleteGymUseCase from '../deleteGym.usecase';

describe('DeleteGymUseCase', () => {
  let deleteGymUseCase: DeleteGymUseCase;
  let gymsRepository: GymsRepository;
  const gymById = getMockGym();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        DeleteGymUseCase,
        {
          provide: GymsRepository,
          useValue: {
            getById: jest.fn().mockResolvedValue(gymById),
            deleteObject: jest.fn().mockResolvedValue(true),
          },
        },
      ],
    }).compile();

    gymsRepository = module.get<GymsRepository>(GymsRepository);
    deleteGymUseCase = module.get<DeleteGymUseCase>(DeleteGymUseCase);
  });

  describe('execute', () => {
    it('should successfully delete gym', async () => {
      // Given
      // When
      const result = await deleteGymUseCase.execute(99);
      // Then
      expect(gymsRepository.getById).toHaveBeenCalledWith(99);
      expect(gymsRepository.deleteObject).toHaveBeenCalledWith(gymById);
      expect(result).toEqual(true);
    });
  });
});
