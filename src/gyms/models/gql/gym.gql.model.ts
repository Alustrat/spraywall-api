import { Field, Int, ObjectType } from '@nestjs/graphql';
import Gym from '../base/gym.base.model';

@ObjectType('Gym', { description: 'Gym' })
export default class GymGqlModel implements Gym {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  image?: string;

  @Field({ nullable: true })
  address: string;

  @Field({ nullable: true })
  city: string;

  @Field({ nullable: true })
  country: string;
}
