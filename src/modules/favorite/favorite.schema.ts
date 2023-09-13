import z, { object, string, number } from 'zod';
import { processRequestBody } from 'zod-express-middleware';

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
  const body = object({
    ardaId: number({ required_error: 'ardaId is required' }),
  });
  return processRequestBody(body);
};

export { personSchema, removeFavoriteSchema };
