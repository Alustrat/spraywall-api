import { ArgsType, Field, Int } from '@nestjs/graphql';
import { GetGymArgs } from '../base/gyms.base.dto';

@ArgsType()
export class GetGymGqlArgs implements GetGymArgs {
  @Field(() => Int)
  id: number;
}
