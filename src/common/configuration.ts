import * as Joi from 'joi';

export default Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test', 'provision')
    .default('development'),
  API_PORT: Joi.number().default(3000),
  DATABASE_URL: Joi.string().required(),
});
