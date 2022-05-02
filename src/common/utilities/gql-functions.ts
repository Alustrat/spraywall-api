import { GqlTypeReference, ReturnTypeFunc } from '@nestjs/graphql';

export function gqlType(dto: GqlTypeReference): ReturnTypeFunc {
  return () => dto;
}
