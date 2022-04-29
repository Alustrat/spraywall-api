import { Test } from '@nestjs/testing';
import GymsRepository from 'gyms/repositories/gyms.repository';
import { getMockGym } from 'mocks/gyms.mock';
import UpdateGymUseCase from '../updateGym.usecase';

describe('CreateGymUseCase', () => {
  let updateGymUseCase: UpdateGymUseCase;
  let gymsRepository: GymsRepository;
  const gymById = getMockGym();
  const savedGym = getMockGym();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UpdateGymUseCase,
        {
          provide: GymsRepository,
          useValue: {
            getById: jest.fn().mockResolvedValue(gymById),
            saveObject: jest.fn().mockResolvedValue(savedGym),
          },
        },
      ],
    }).compile();

    gymsRepository = module.get<GymsRepository>(GymsRepository);
    updateGymUseCase = module.get<UpdateGymUseCase>(UpdateGymUseCase);
  });

  describe('execute', () => {
    it('should successfully create Gym and save it through repository', async () => {
      // Given
      const args = {
        id: 5,
        name: 'test gym',
        city: 'Paris',
        country: 'France',
        address: '1 rue des champs elysees',
      };
      const expectedGym = {
        ...gymById,
        ...args,
      };
      // When
      const result = await updateGymUseCase.execute(args);
      // Then
      expect(gymsRepository.getById).toHaveBeenCalledWith(5);
      expect(gymsRepository.saveObject).toHaveBeenCalledWith(expectedGym);
      expect(result).toEqual(savedGym);
    });
  });
});
