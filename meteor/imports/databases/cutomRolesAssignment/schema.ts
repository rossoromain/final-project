import { Mongo } from "meteor/mongo";

import { CustomRoleAssignmentType } from '.'

import { createDbSchema } from '../utils';

export const CustomRoleAssignmentSchema = createDbSchema({
    userId: { type: String, optional: false, required: true },
    customRoles: { type: Array, optional: false, required: true },
    'customRoles.$': { type: String },
});

export default (collection: Mongo.Collection<CustomRoleAssignmentType>): void => {
    collection.attachSchema(CustomRoleAssignmentSchema);
}