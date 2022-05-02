import { ArgsType, Field, Int } from '@nestjs/graphql';
import { gqlType } from 'common/utilities/gql-functions';
import { GetGymArgs } from '../base/gyms.base.dto';

@ArgsType()
export class GetGymGqlArgs implements GetGymArgs {
  @Field(gqlType(Int))
  id: number;
}
