import Gym from 'gyms/models/base/gym.base.model';
import { getRandomInt, getRandomString } from './base.mock';

export function getMockGym({
  id = getRandomInt(),
  name = getRandomString(),
  address = getRandomString(),
  city = getRandomString(),
  country = getRandomString(),
} = {}): Gym {
  return {
    id,
    name,
    address,
    city,
    country,
  };
}

export function getMockGymList(number = 5, args = {}): Gym[] {
  return [...Array(number).keys()].map((key) =>
    getMockGym({ id: key + 1, ...args }),
  );
}
