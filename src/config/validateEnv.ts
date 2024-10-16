import Joi from 'joi';

const envSchema = Joi.object({
  REACT_APP_BACKEND_URL: Joi.string().required(),
  PORT: Joi.number().default(3000),
}).unknown();

const { error, value: envVars } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

export default envVars;
