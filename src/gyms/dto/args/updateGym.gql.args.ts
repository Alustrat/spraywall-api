import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import { UpdateGymArgs } from '../base/gyms.base.dto';

@ArgsType()
export default class UpdateGymGqlArgs implements UpdateGymArgs {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  @IsOptional()
  name?: string;

  @Field({ nullable: true })
  @IsOptional()
  image?: string;

  @Field({ nullable: true })
  @IsOptional()
  address?: string;

  @Field({ nullable: true })
  @IsOptional()
  city?: string;

  @Field({ nullable: true })
  @IsOptional()
  country?: string;
}
