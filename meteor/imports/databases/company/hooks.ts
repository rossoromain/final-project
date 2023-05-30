// ###### 1 => Meteor imports ############
import { Mongo } from 'meteor/mongo'

// ###### 4 => Local folder imports ######
import { CompanyType } from '.'

// eslint-disable-next-line
export default (
    // eslint-disable-next-line
    CompanyDb: Mongo.Collection<CompanyType>,
    // eslint-disable-next-line
): void => { }
