import { Mongo } from "meteor/mongo";

import { CompanyType } from '.'

import { createDbSchema } from '../utils';

export const CompanySchema = createDbSchema({
    name: { type: String, required: true, optional: false, defaultValue: "" },
    owner: { type: String, required: true, optional: false, defaultValue: "" },
});

export default (collection: Mongo.Collection<CompanyType>): void => {
    collection.attachSchema(CompanySchema);
}