// ###### 1 => Meteor imports ############
import { Mongo } from 'meteor/mongo'
import SimpleSchema from 'simpl-schema'

// ###### 4 => Local folder imports ######
import { User } from '.'

// ###### 5 => Local app imports #########
import {
    createDbSchema,
    meteorUserSchemaDefinition,
} from '../utils';

import { RoleAssignmentSchema } from '../roleAssignment/schema';

export const UserSchema = createDbSchema({
    ...meteorUserSchemaDefinition,

    firstName: { type: String, defaultValue: '' },

    lastName: { type: String, defaultValue: '' },

    //permissions: { type: Array, defaultValue: [], optional: true },
    //'permissions.$': { type: RoleAssignmentSchema.pick('role', 'scope') },

    tokenApp: { type: Boolean, optional: true }
})

export default (collection: Mongo.Collection<User>): void => {
    collection.attachSchema(UserSchema)
}
