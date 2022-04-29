import { randomBytes } from 'crypto';

export function getRandomInt(max = 100): number {
  return Math.floor(Math.random() * max);
}

/**
 * Return a string with a specific size. Default size is set to 7. Maximum size is
 * set to 255, even if a greater number is given.
 */
export function getRandomString(size = 7): string {
  return randomBytes(255).toString('hex').substring(0, Math.min(size, 255));
}
