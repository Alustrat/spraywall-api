import { Injectable } from '@nestjs/common';
import GymGqlModel from 'gyms/models/gql/gym.gql.model';
import GymsRepository from 'gyms/repositories/gyms.repository';

@Injectable()
export default class GetGymUseCase {
  constructor(private readonly gymsRepository: GymsRepository) {}

  async execute(id: number): Promise<GymGqlModel> {
    return this.gymsRepository.getById(id);
  }
}
