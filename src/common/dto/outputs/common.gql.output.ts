import { Field, Int, ObjectType } from '@nestjs/graphql';
import { QueryPaginationOutput } from '../base/common.base.dto';

@ObjectType('Pagination', { description: 'Pagination' })
export default class QueryPaginationGqlOutput implements QueryPaginationOutput {
  @Field(() => Int)
  total: number;

  @Field(() => Int)
  rows: number;

  @Field(() => Int)
  remaining: number;
}
