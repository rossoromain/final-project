// ###### 1 => Meteor imports ############
import { Mongo } from 'meteor/mongo'

// ###### 4 => Local folder imports ######
import { CustomRoleType } from '.'

// eslint-disable-next-line
export default (
    // eslint-disable-next-line
    CustomRoleDb: Mongo.Collection<CustomRoleType>,
    // eslint-disable-next-line
): void => { }
