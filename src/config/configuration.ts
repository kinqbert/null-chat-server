import "dotenv/config";

import Joi from "joi";

const envSchema = Joi.object({
  PORT: Joi.number().default(5050),
})
  .unknown()
  .required();

interface EnvVars {
  PORT: number;
}

const { error, value } = envSchema.validate(process.env);

if (error) {
  throw new Error(`Environment validation error: ${error.message}`);
}

const envVars = value as EnvVars;

export const CONFIG = {
  PORT: envVars.PORT || 5050,
};
