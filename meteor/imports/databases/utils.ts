import SimplSchema, { SchemaDefinition, SimpleSchemaDefinition } from 'simpl-schema'

export const createDbSchema = (schema: SimpleSchemaDefinition) => {

    const schemaDefinition: SimpleSchemaDefinition = { ...schema }

    return new SimplSchema(schemaDefinition);
}

export const VerifiedEmail = new SimplSchema({
    address: { type: String },

    verified: Boolean,
})

export const meteorUserSchemaDefinition: Record<string, SchemaDefinition> = {
    services: { type: Object, blackbox: true },

    username: { type: String, optional: true },

    emails: { type: Array },
    'emails.$': { type: VerifiedEmail },
}