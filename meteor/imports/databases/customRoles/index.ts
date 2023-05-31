import { Mongo } from 'meteor/mongo'

import addHooks from './hooks'
import addSchema from './schema'

export interface CustomRoleType extends MongoBaseDocument {
    "name": string;
    "scope": number[];
    "companyId": string;
}

const CustomRoleDb: Mongo.Collection<CustomRoleType> = new Mongo.Collection(
    "customRole",
);

addHooks(CustomRoleDb)
addSchema(CustomRoleDb)

export default CustomRoleDb;