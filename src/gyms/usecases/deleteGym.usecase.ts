import { Injectable } from '@nestjs/common';
import GymsRepository from 'gyms/repositories/gyms.repository';

@Injectable()
export default class DeleteGymUseCase {
  constructor(private readonly gymsRepository: GymsRepository) {}

  async execute(id: number): Promise<boolean> {
    const gym = await this.gymsRepository.getById(id);
    return this.gymsRepository.deleteObject(gym);
  }
}
