import { Args, Query, Mutation, Resolver } from '@nestjs/graphql';
import BaseResolver from 'common/common.resolver';
import CreateGymGqlArgs from './dto/args/createGym.gql.args';
import { DeleteGymGqlArgs } from './dto/args/deleteGym.gql.args';
import { GetGymGqlArgs } from './dto/args/getGym.gql.args';
import GetGymsGqlArgs from './dto/args/getGyms.gql.args';
import UpdateGymGqlArgs from './dto/args/updateGym.gql.args';
import GetGymsGqlOutput from './dto/output/getGyms.gql.output';
import GymGqlModel from './models/gql/gym.gql.model';
import CreateGymUseCase from './usecases/createGym.usecase';
import DeleteGymUseCase from './usecases/deleteGym.usecase';
import GetGymUseCase from './usecases/getGym.usecase';
import GetGymsUseCase from './usecases/getGyms.usecase';
import UpdateGymUseCase from './usecases/updateGym.usecase';

@Resolver(GymGqlModel)
export default class GymsResolver extends BaseResolver {
  constructor(
    private readonly getGymsUseCase: GetGymsUseCase,
    private readonly getGymUseCase: GetGymUseCase,
    private readonly createGymUseCase: CreateGymUseCase,
    private readonly updateGymUseCase: UpdateGymUseCase,
    private readonly deleteGymUseCase: DeleteGymUseCase,
  ) {
    super();
  }

  @Query(BaseResolver.getGqlType(GetGymsGqlOutput))
  async getGyms(@Args() args: GetGymsGqlArgs): Promise<GetGymsGqlOutput> {
    return this.getGymsUseCase.execute(args);
  }

  @Query(BaseResolver.getGqlType(GymGqlModel))
  async getGym(@Args() args: GetGymGqlArgs): Promise<GymGqlModel> {
    return this.getGymUseCase.execute(args.id);
  }

  @Mutation(BaseResolver.getGqlType(GymGqlModel))
  async createGym(@Args() args: CreateGymGqlArgs): Promise<GymGqlModel> {
    return this.createGymUseCase.execute(args);
  }

  @Mutation(BaseResolver.getGqlType(GymGqlModel))
  async updateGym(@Args() args: UpdateGymGqlArgs): Promise<GymGqlModel> {
    return this.updateGymUseCase.execute(args);
  }

  @Mutation(BaseResolver.getGqlType(Boolean))
  async deleteGym(@Args() args: DeleteGymGqlArgs): Promise<boolean> {
    return this.deleteGymUseCase.execute(args.id);
  }
}
