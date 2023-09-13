import z, { object, string, number, boolean, array } from 'zod';
import { processRequestBody } from 'zod-express-middleware';

const searchSchema = () => {
  const body = object({
    query: string({ required_error: 'Search string is required' }),
    identityType: string().default('person'),
    meta: boolean().default(false),
    limit: number().default(10),
    torreGgId: string().default('1574270'),
    excludeContacts: boolean().default(true),
    excludedPeople: array(string()).default([]),
  });
  return processRequestBody(body);
};

export default searchSchema;
