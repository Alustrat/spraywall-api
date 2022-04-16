import { Args, Query, Int, Mutation, Resolver } from '@nestjs/graphql';
import CreateGymGqlArgs from './dto/args/createGym.gql.args';
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
export default class GymsResolver {
  constructor(
    private readonly getGymsUseCase: GetGymsUseCase,
    private readonly getGymUseCase: GetGymUseCase,
    private readonly createGymUseCase: CreateGymUseCase,
    private readonly updateGymUseCase: UpdateGymUseCase,
    private readonly deleteGymUseCase: DeleteGymUseCase,
  ) {}

  @Query(() => GetGymsGqlOutput)
  async getGyms(@Args() args: GetGymsGqlArgs): Promise<GetGymsGqlOutput> {
    return this.getGymsUseCase.execute(args);
  }

  @Query(() => GymGqlModel)
  async getGym(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<GymGqlModel> {
    return this.getGymUseCase.execute(id);
  }

  @Mutation(() => GymGqlModel)
  async createGym(@Args() args: CreateGymGqlArgs): Promise<GymGqlModel> {
    return this.createGymUseCase.execute(args);
  }

  @Mutation(() => GymGqlModel)
  async updateGym(@Args() args: UpdateGymGqlArgs): Promise<GymGqlModel> {
    return this.updateGymUseCase.execute(args);
  }

  @Mutation(() => Boolean)
  async deleteGym(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<boolean> {
    return this.deleteGymUseCase.execute(id);
  }
}
