import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'

import addHooks from './hooks'
import addSchema from './schema'

type UserType = MongoBaseDocument & Meteor.User

export interface User extends UserType {
    firstName: string
    lastName: string
    // permissions: Pick<RoleAssignment, 'role' | 'scope'>[]
    tokenApp: String
}

const Users: Mongo.Collection<User> = Meteor.users;

addHooks(Users)
addSchema(Users)

export default Users