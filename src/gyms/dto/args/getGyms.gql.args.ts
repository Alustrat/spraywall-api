import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { GetGymsArgs } from '../base/gyms.base.dto';

@ArgsType()
export default class GetGymsGqlArgs implements GetGymsArgs {
  @Field({ defaultValue: null })
  @IsOptional()
  name: string;

  @Field({ defaultValue: null })
  @IsOptional()
  city: string;

  @Field({ defaultValue: null })
  @IsOptional()
  country: string;

  @Field(() => Int, { defaultValue: 50 })
  @IsOptional()
  limit: number;

  @Field(() => Int, { defaultValue: 0 })
  @IsOptional()
  offset: number;
}
