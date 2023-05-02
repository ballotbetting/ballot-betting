// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Dummy } = initSchema(schema);

export {
  Dummy
};