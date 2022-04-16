import { Injectable } from '@nestjs/common';
import GetGymsGqlArgs from 'gyms/dto/args/getGyms.gql.args';
import GetGymsGqlOutput from 'gyms/dto/output/getGyms.gql.output';
import GymsRepository from 'gyms/repositories/gyms.repository';

@Injectable()
export default class GetGymsUseCase {
  constructor(private readonly gymsRepository: GymsRepository) {}

  async execute(args: GetGymsGqlArgs): Promise<GetGymsGqlOutput> {
    return this.gymsRepository.getAllList(args);
  }
}
