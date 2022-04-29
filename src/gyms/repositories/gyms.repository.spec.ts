import { NotFoundException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import GymsDbRepository from 'gyms/dbRepositories/gyms.dbRepository';
import { GetGymsArgs } from 'gyms/dto/base/gyms.base.dto';
import { getMockGym, getMockGymList } from 'mocks/gyms.mock';
import GymsRepository from './gyms.repository';

describe('GymsRepository', () => {
  let gymsRepository: GymsRepository;
  let gymsDbRepository: GymsDbRepository;
  const gymById = getMockGym();
  const gymList = getMockGymList();
  const savedGym = getMockGym();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        GymsRepository,
        {
          provide: GymsDbRepository,
          useValue: {
            getPaginatedListByQueryArgs: jest.fn().mockResolvedValue(gymList),
            getById: jest.fn().mockResolvedValue(gymById),
            saveObject: jest.fn().mockResolvedValue(savedGym),
            deleteObject: jest.fn().mockResolvedValue(true),
          },
        },
      ],
    }).compile();

    gymsRepository = module.get<GymsRepository>(GymsRepository);
    gymsDbRepository = module.get<GymsDbRepository>(GymsDbRepository);
  });

  describe('getList', () => {
    it('should successfully find gyms through DB repository', async () => {
      // Given
      const args = <GetGymsArgs>{
        name: 'test',
      };
      // When
      const result = await gymsRepository.getList(args);
      // Then
      expect(gymsDbRepository.getPaginatedListByQueryArgs).toHaveBeenCalledWith(
        args,
      );
      expect(result).toEqual(gymList);
    });
  });

  describe('getById', () => {
    it('should successfully find gym through DB repository', async () => {
      // Given
      // When
      const result = await gymsRepository.getById(99);
      // Then
      expect(gymsDbRepository.getById).toHaveBeenCalledWith(99);
      expect(result).toEqual(gymById);
    });

    it('should throw an error when no gyms found', async () => {
      // Given
      gymsDbRepository.getById = jest.fn().mockResolvedValue(null);
      const expectedError = new NotFoundException('Gym with id 99 not found');
      //When
      await expect(
        gymsRepository.getById(99),
        //Then
      ).rejects.toEqual(expectedError);
    });
  });

  describe('saveObject', () => {
    it('should successfully save gyms through DB repository', async () => {
      // Given
      const gym = getMockGym();
      // When
      const result = await gymsRepository.saveObject(gym);
      // Then
      expect(gymsDbRepository.saveObject).toHaveBeenCalledWith(gym);
      expect(result).toEqual(savedGym);
    });
  });

  describe('deleteObject', () => {
    it('should successfully delete gyms through DB repository', async () => {
      // Given
      const item = getMockGym();
      // When
      const result = await gymsRepository.deleteObject(item);
      // Then
      expect(gymsDbRepository.deleteObject).toBeCalledWith(item);
      expect(result).toEqual(true);
    });
  });
});
