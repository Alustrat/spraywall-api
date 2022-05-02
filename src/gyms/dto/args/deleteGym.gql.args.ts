import { ArgsType, Field, Int } from '@nestjs/graphql';
import { gqlType } from 'common/utilities/gql-functions';
import { DeleteGymArgs } from '../base/gyms.base.dto';

@ArgsType()
export class DeleteGymGqlArgs implements DeleteGymArgs {
  @Field(gqlType(Int))
  id: number;
}
