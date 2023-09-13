import z, { object, string, number, boolean, array } from 'zod';
import { processRequestBody } from 'zod-express-middleware';

const searchSchema = () => {
  const body = object({
    query: string({ required_error: 'Search string is required' }),
    identityType: string(),
    meta: boolean(),
    limit: number(),
    torreGgId: string(),
    excludeContacts: boolean(),
    excludedPeople: array(string()),
  });

  return processRequestBody(body);
};

export default searchSchema;
