import { Injectable } from '@nestjs/common';
import CreateGymGqlArgs from 'gyms/dto/args/createGym.gql.args';
import GymGqlModel from 'gyms/models/gql/gym.gql.model';
import GymsRepository from 'gyms/repositories/gyms.repository';

@Injectable()
export default class CreateGymUseCase {
  constructor(private readonly gymsRepository: GymsRepository) {}

  async execute(args: CreateGymGqlArgs): Promise<GymGqlModel> {
    const gym = { id: null, ...args };
    return this.gymsRepository.saveObject(gym);
  }
}
