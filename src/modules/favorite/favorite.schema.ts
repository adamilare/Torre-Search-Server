import z, { object, string, number } from 'zod';
import {
  processRequestBody,
  processRequestParams,
} from 'zod-express-middleware';

const personSchema = () => {
  const body = object({
    ardaId: number({ required_error: 'ardaId is required' }),
    name: string({ required_error: 'name is required' }),
    professionalHeadline: string({
      required_error: 'professionalHeadline is required',
    }),
    username: string({ required_error: 'username is required' }),
    imageUrl: string(),
  });
  return processRequestBody(body);
};

const removeFavoriteSchema = () => {
  const params = object({
    ardaId: string({ required_error: 'ardaId is required' }),
  });
  return processRequestParams(params);
};

export { personSchema, removeFavoriteSchema };
