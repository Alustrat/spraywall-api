import { GqlTypeReference } from '@nestjs/graphql';

type ReturnTypeFunc = (returns?: void) => GqlTypeReference;

export default class BaseResolver {
  static getGqlType(dto: GqlTypeReference): ReturnTypeFunc {
    return () => dto;
  }
}
