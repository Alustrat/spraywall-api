import { ArgsType, Field, Int } from '@nestjs/graphql';
import { DeleteGymArgs } from '../base/gyms.base.dto';

@ArgsType()
export class DeleteGymGqlArgs implements DeleteGymArgs {
  @Field(() => Int)
  id: number;
}
