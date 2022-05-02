import { Field, Int, ObjectType } from '@nestjs/graphql';
import { gqlType } from 'common/utilities/gql-functions';
import { QueryPaginationOutput } from '../base/common.base.dto';

@ObjectType('Pagination', { description: 'Pagination' })
export default class QueryPaginationGqlOutput implements QueryPaginationOutput {
  @Field(gqlType(Int))
  total: number;

  @Field(gqlType(Int))
  rows: number;

  @Field(gqlType(Int))
  remaining: number;
}
