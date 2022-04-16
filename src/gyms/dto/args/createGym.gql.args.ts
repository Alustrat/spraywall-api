import { ArgsType, Field } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { CreateGymArgs } from '../base/gyms.base.dto';

@ArgsType()
export default class CreateGymGqlArgs implements CreateGymArgs {
  @Field()
  name: string;

  @Field({ defaultValue: null })
  @IsOptional()
  image?: string;

  @Field()
  address: string;

  @Field()
  city: string;

  @Field()
  country: string;
}
