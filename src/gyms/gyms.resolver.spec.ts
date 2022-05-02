import { Test } from '@nestjs/testing';
import GymsResolver from './gyms.resolver';
import CreateGymUseCase from './usecases/createGym.usecase';
import DeleteGymUseCase from './usecases/deleteGym.usecase';
import GetGymUseCase from './usecases/getGym.usecase';
import GetGymsUseCase from './usecases/getGyms.usecase';
import UpdateGymUseCase from './usecases/updateGym.usecase';
import { getMockGym, getMockGymList } from 'mocks/gyms.mock';
import GetGymsGqlArgs from './dto/args/getGyms.gql.args';
import CreateGymGqlArgs from './dto/args/createGym.gql.args';
import UpdateGymGqlArgs from './dto/args/updateGym.gql.args';
import { DeleteGymGqlArgs } from './dto/args/deleteGym.gql.args';

describe('GymsResolver', () => {
  let gymsResolver: GymsResolver;
  let createGymUseCase: CreateGymUseCase;
  let deleteGymUseCase: DeleteGymUseCase;
  let getGymUseCase: GetGymUseCase;
  let getGymsUseCase: GetGymsUseCase;
  let updateGymUseCase: UpdateGymUseCase;
  const gymById = getMockGym();
  const gymsList = getMockGymList();
  const createdGym = getMockGym();
  const updatedGym = getMockGym();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        GymsResolver,
        {
          provide: CreateGymUseCase,
          useValue: {
            execute: jest.fn().mockResolvedValue(createdGym),
          },
        },
        {
          provide: DeleteGymUseCase,
          useValue: {
            execute: jest.fn().mockResolvedValue(true),
          },
        },
        {
          provide: GetGymUseCase,
          useValue: {
            execute: jest.fn().mockResolvedValue(gymById),
          },
        },
        {
          provide: GetGymsUseCase,
          useValue: {
            execute: jest.fn().mockResolvedValue(gymsList),
          },
        },
        {
          provide: UpdateGymUseCase,
          useValue: {
            execute: jest.fn().mockResolvedValue(updatedGym),
          },
        },
      ],
    }).compile();

    gymsResolver = module.get<GymsResolver>(GymsResolver);
    createGymUseCase = module.get<CreateGymUseCase>(CreateGymUseCase);
    deleteGymUseCase = module.get<DeleteGymUseCase>(DeleteGymUseCase);
    getGymUseCase = module.get<GetGymUseCase>(GetGymUseCase);
    getGymsUseCase = module.get<GetGymsUseCase>(GetGymsUseCase);
    updateGymUseCase = module.get<UpdateGymUseCase>(UpdateGymUseCase);
  });

  describe('getGyms', () => {
    it('should successfully call usecase and return usecase output', async () => {
      // Given
      const args = <GetGymsGqlArgs>{
        name: 'test',
        country: 'France',
        city: null,
        limit: 5,
        offset: 0,
      };
      // When
      const result = await gymsResolver.getGyms(args);
      // Then
      expect(getGymsUseCase.execute).toHaveBeenCalledWith(args);
      expect(result).toEqual(gymsList);
    });
  });

  describe('getGym', () => {
    it('should successfully call usecase and return usecase output', async () => {
      // Given
      const args = <DeleteGymGqlArgs>{ id: 99 };
      // When
      const result = await gymsResolver.getGym(args);
      // Then
      expect(getGymUseCase.execute).toHaveBeenCalledWith(99);
      expect(result).toEqual(gymById);
    });
  });

  describe('createGym', () => {
    it('should successfully call usecase and return usecase output', async () => {
      // Given
      const args = <CreateGymGqlArgs>{
        name: 'test',
        image: null,
        address: '1 rue des Champs Elysées',
        city: 'Paris',
        country: 'France',
      };
      // When
      const result = await gymsResolver.createGym(args);
      // Then
      expect(createGymUseCase.execute).toHaveBeenCalledWith(args);
      expect(result).toEqual(createdGym);
    });
  });

  describe('updateGym', () => {
    it('should successfully call usecase and return usecase output', async () => {
      // Given
      const args = <UpdateGymGqlArgs>{
        id: 1,
        name: 'test 2',
        address: '2 rue des Champs Elysées',
      };
      // When
      const result = await gymsResolver.updateGym(args);
      // Then
      expect(updateGymUseCase.execute).toHaveBeenCalledWith(args);
      expect(result).toEqual(updatedGym);
    });
  });

  describe('deleteGym', () => {
    it('should successfully call usecase and return usecase output', async () => {
      // Given
      const args = <DeleteGymGqlArgs>{ id: 99 };
      // When
      const result = await gymsResolver.deleteGym(args);
      // Then
      expect(deleteGymUseCase.execute).toHaveBeenCalledWith(99);
      expect(result).toEqual(true);
    });
  });
});
