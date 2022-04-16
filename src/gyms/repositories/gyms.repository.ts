import { Injectable, NotFoundException } from '@nestjs/common';
import GymsDbRepository from 'gyms/dbRepositories/gyms.dbRepository';
import { GetGymsArgs, GetGymsOutput } from 'gyms/dto/base/gyms.base.dto';
import Gym from 'gyms/models/base/gym.base.model';

@Injectable()
export default class GymsRepository {
  constructor(private readonly gymsDbRepository: GymsDbRepository) {}

  async getAllList(args: GetGymsArgs): Promise<GetGymsOutput> {
    return this.gymsDbRepository.getPaginatedListByQueryArgs(args);
  }

  async getById(id: number): Promise<Gym> {
    const gym = await this.gymsDbRepository.getById(id);
    if (!gym) {
      throw new NotFoundException(`Gym with id ${id} not found`);
    }

    return gym;
  }

  async saveObject(gym: Gym): Promise<Gym> {
    return this.gymsDbRepository.saveObject(gym);
  }

  async deleteObject(gym: Gym): Promise<boolean> {
    return this.gymsDbRepository.deleteObject(gym);
  }
}
