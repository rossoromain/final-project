import { Mongo } from 'meteor/mongo'

import addHooks from './hooks'
import addSchema from './schema'

export interface CompanyType extends MongoBaseDocument {
    "name": string;
    "owner": string;
}

const CompanyDb: Mongo.Collection<CompanyType> = new Mongo.Collection(
    "company",
);

addHooks(CompanyDb)
addSchema(CompanyDb)

export default CompanyDb;