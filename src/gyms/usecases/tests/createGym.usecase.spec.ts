import { Test } from '@nestjs/testing';
import GymsRepository from 'gyms/repositories/gyms.repository';
import { getMockGym } from 'mocks/gyms.mock';
import CreateGymUseCase from '../createGym.usecase';

describe('CreateGymUseCase', () => {
  let createGymUseCase: CreateGymUseCase;
  let gymsRepository: GymsRepository;
  const savedGym = getMockGym();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        CreateGymUseCase,
        {
          provide: GymsRepository,
          useValue: {
            saveObject: jest.fn().mockResolvedValue(savedGym),
          },
        },
      ],
    }).compile();

    gymsRepository = module.get<GymsRepository>(GymsRepository);
    createGymUseCase = module.get<CreateGymUseCase>(CreateGymUseCase);
  });

  describe('execute', () => {
    it('should successfully create Gym and save it through repository', async () => {
      // Given
      const args = {
        name: 'test gym',
        city: 'Paris',
        country: 'France',
        address: '1 rue des champs elysees',
      };
      const expectedGym = {
        id: null,
        ...args,
      };
      // When
      const result = await createGymUseCase.execute(args);
      // Then
      expect(gymsRepository.saveObject).toHaveBeenCalledWith(expectedGym);
      expect(result).toEqual(savedGym);
    });
  });
});
