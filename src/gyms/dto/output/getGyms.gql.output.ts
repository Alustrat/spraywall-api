import { Field, ObjectType } from '@nestjs/graphql';
import QueryPaginationGqlOutput from 'common/dto/outputs/common.gql.output';
import { gqlType } from 'common/utilities/gql-functions';
import GymGqlModel from 'gyms/models/gql/gym.gql.model';
import { GetGymsOutput } from '../base/gyms.base.dto';

@ObjectType('GymsList', { description: 'GymsList' })
export default class GetGymsGqlOutput implements GetGymsOutput {
  @Field(gqlType([GymGqlModel]))
  gyms: GymGqlModel[];

  @Field(gqlType(QueryPaginationGqlOutput))
  pagination: QueryPaginationGqlOutput;
}
