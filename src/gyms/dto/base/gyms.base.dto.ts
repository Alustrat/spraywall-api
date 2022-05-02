import {
  QueryPaginationArgs,
  QueryPaginationOutput,
} from 'common/dto/base/common.base.dto';
import Gyms from 'gyms/models/base/gym.base.model';

export interface GetGymsArgs extends QueryPaginationArgs {
  name: string;
  city: string;
  country: string;
}

export interface GetGymArgs {
  id: number;
}

export interface CreateGymArgs {
  name: string;
  image?: string;
  address: string;
  city: string;
  country: string;
}

export interface UpdateGymArgs {
  id: number;
  name?: string;
  image?: string;
  address?: string;
  city?: string;
  country?: string;
}

export interface DeleteGymArgs {
  id: number;
}

export interface GetGymsOutput {
  gyms: Gyms[];
  pagination: QueryPaginationOutput;
}
