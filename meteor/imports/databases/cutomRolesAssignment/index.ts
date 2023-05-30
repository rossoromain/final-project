import { Mongo } from 'meteor/mongo'

import addHooks from './hooks'
import addSchema from './schema'

export interface CustomRoleAssignmentType extends MongoBaseDocument {
    "customRoles": string[];
    "userId": string;
}

const CustomRoleAssignmentDb: Mongo.Collection<CustomRoleAssignmentType> = new Mongo.Collection(
    "customRoleAssignment",
);

addHooks(CustomRoleAssignmentDb)
addSchema(CustomRoleAssignmentDb)

export default CustomRoleAssignmentDb;