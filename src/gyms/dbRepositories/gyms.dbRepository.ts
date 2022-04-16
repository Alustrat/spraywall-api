import { Injectable } from '@nestjs/common';
import DbRepository from 'common/dbRepositories/common.dbRepositories';
import { GetGymsArgs, GetGymsOutput } from 'gyms/dto/base/gyms.base.dto';
import Gym from 'gyms/models/base/gym.base.model';
import GymDbModel from 'gyms/models/db/gym.db.model';
import { EntityRepository } from 'typeorm';

@Injectable()
@EntityRepository(GymDbModel)
export default class GymsDbRepository extends DbRepository<GymDbModel> {
  async getPaginatedListByQueryArgs(args: GetGymsArgs): Promise<GetGymsOutput> {
    const queryBuilder = this.createQueryBuilder('gyms')
      .take(args.limit)
      .skip(args.offset);

    if (args.name !== null) {
      queryBuilder.andWhere('gyms.name = :name', { name: `%${args.name}%` });
    }
    if (args.city !== null) {
      queryBuilder.andWhere('gyms.city = :city', { city: args.city });
    }
    if (args.country !== null) {
      queryBuilder.andWhere('gyms.country = :country', {
        country: args.country,
      });
    }

    const [rows, count] = await queryBuilder.getManyAndCount();
    return {
      gyms: rows,
      pagination: this.getPaginationWithObjectsAndCount(
        args,
        rows.length,
        count,
      ),
    };
  }

  async getById(id: number): Promise<Gym | undefined> {
    return this.findOne(id);
  }

  async saveObject(gym: Gym): Promise<Gym> {
    return this.save(gym);
  }

  async deleteObject(gym: Gym): Promise<boolean> {
    return (await this.delete(gym.id)).affected > 0;
  }
}
