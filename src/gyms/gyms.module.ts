import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import GymsDbRepository from './dbRepositories/gyms.dbRepository';
import GymsResolver from './gyms.resolver';
import GymsRepository from './repositories/gyms.repository';
import CreateGymUseCase from './usecases/createGym.usecase';
import DeleteGymUseCase from './usecases/deleteGym.usecase';
import GetGymUseCase from './usecases/getGym.usecase';
import GetGymsUseCase from './usecases/getGyms.usecase';
import UpdateGymUseCase from './usecases/updateGym.usecase';

@Module({
  imports: [TypeOrmModule.forFeature([GymsDbRepository])],
  providers: [
    GymsResolver,
    GymsRepository,
    CreateGymUseCase,
    DeleteGymUseCase,
    GetGymUseCase,
    GetGymsUseCase,
    UpdateGymUseCase,
  ],
  exports: [GymsRepository],
})
export default class GymsModule {}
