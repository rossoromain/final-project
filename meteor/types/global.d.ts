export {}

declare global {
    // Mongo types
    type ID = string

    type URI = string

    type Email = string

    interface MongoBaseDocument {
        _id: ID
        createdAt?: Date
        createdBy?: ID
        updatedAt?: Date
    }
}