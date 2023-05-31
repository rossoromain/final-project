import { Mongo } from "meteor/mongo";

import { CustomRoleType } from '.'

import { createDbSchema } from '../utils';

export const CustomRoleSchema = createDbSchema({
    name: { type: String, required: true, optional: false, defaultValue: "" },
    scope: { type: Array, required: true, optional: false, defaultValue: [] },
    "scope.$": { type: Number },
    companyId: { type: String, required: true, optional: false }
});

export default (collection: Mongo.Collection<CustomRoleType>): void => {
    collection.attachSchema(CustomRoleSchema);
}