// ###### 1 => Meteor imports ############
import { Mongo } from 'meteor/mongo'

// ###### 4 => Local folder imports ######
import { CustomRoleAssignmentType } from '.'

// eslint-disable-next-line
export default (
    // eslint-disable-next-line
    CustomRoleAssignmentDb: Mongo.Collection<CustomRoleAssignmentType>,
    // eslint-disable-next-line
): void => { }
