import { Injectable } from '@nestjs/common';
import UpdateGymGqlArgs from 'gyms/dto/args/updateGym.gql.args';
import GymGqlModel from 'gyms/models/gql/gym.gql.model';
import GymsRepository from 'gyms/repositories/gyms.repository';

@Injectable()
export default class UpdateGymUseCase {
  constructor(private readonly gymsRepository: GymsRepository) {}

  async execute(args: UpdateGymGqlArgs): Promise<GymGqlModel> {
    let gym = await this.gymsRepository.getById(args.id);
    gym = { ...gym, ...args };
    return this.gymsRepository.saveObject(gym);
  }
}
