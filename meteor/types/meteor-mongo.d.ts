/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'meteor/mongo' {
    import { Mongo as DefaultMongo } from 'meteor/mongo'
    import SimplSchema from 'simpl-schema'

    // Type definitions for non-npm package Meteor package matb33:collection-hooks 0.8
    // Project: https://github.com/matb33/meteor-collection-hooks
    // Definitions by: Trygve Wastvedt <https://github.com/twastvedt>
    // Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

    /// <reference path="meteor-mongo.d.ts" />
    namespace Mongo {
        interface CacheOptions<K, T> {
            type: 'one' | 'many' | 'inverse' | 'many-inverse'
            collection: DefaultMongo.Collection<K>
            fields: string[] | Record<string, 0 | 1>
            referenceField: keyof K | string
            cacheField: keyof T
            bypassSchema?: boolean
        }

        interface CacheFieldOptions<K, T> {
            fields: string[] | Record<string, 0 | 1>
            cacheField: keyof T
            transform: (doc: T) => K
            bypassSchema?: boolean
        }

        interface Projection {
            sort?: SortSpecifier
            skip?: number
            limit?: number
            fields?: FieldSpecifier
            reactive?: boolean
            // eslint-disable-next-line @typescript-eslint/ban-types
            transform?: Function | null
        }

        // eslint-disable-next-line
        export interface Collection<T> {
            schema: SimplSchema

            attachSchema(schema: SimplSchema): void

            attachJSONSchema(schema: unknown): void

            helpers(methods: Record<string, unknown>): void

            _name: string

            cache<K>(options: CacheOptions<K, T>): void

            cacheField<K>(options: CacheFieldOptions<K, T>): void

            // regarding meteor add meteor add sakulstra:aggregate
            aggregate(request: Array<Object>): Array<Object>

            before: {
                find(
                    hook: (
                        userId: string,
                        selector: DefaultMongo.Selector<T>,
                        options: CollectionHooks.ModifierOptions,
                    ) => void,
                ): void
                findOne(
                    hook: (
                        userId: string,
                        selector: DefaultMongo.Selector<T>,
                        options: CollectionHooks.ModifierOptions,
                    ) => void,
                ): void
                insert(hook: (userId: string, doc: T) => void): void
                remove(hook: (userId: string, doc: T) => void): void

                update(
                    hook: (
                        userId: string,
                        doc: T,
                        fieldNames: string[],
                        modifier: DefaultMongo.Modifier<T>,
                        options: CollectionHooks.ModifierOptions,
                    ) => void,
                ): void
                upsert(
                    hook: (
                        userId: string,
                        doc: T,
                        selector: DefaultMongo.Selector<T>,
                        modifier: DefaultMongo.Modifier<T>,
                        options: CollectionHooks.ModifierOptions,
                    ) => void,
                ): void
            }
            after: {
                find(
                    hook: (
                        userId: string,
                        selector: DefaultMongo.Selector<T>,
                        options: CollectionHooks.ModifierOptions,
                        cursor: DefaultMongo.Cursor<T>,
                    ) => void,
                ): void
                findOne(
                    hook: (
                        userId: string,
                        selector: DefaultMongo.Selector<T>,
                        options: CollectionHooks.ModifierOptions,
                        doc: T,
                    ) => void,
                ): void
                insert(hook: (userId: string, doc: T) => void): void
                remove(hook: (userId: string, doc: T) => void): void
                update(
                    hook: (
                        userId: string,
                        doc: T,
                        fieldNames: string[],
                        modifier: DefaultMongo.Modifier<T>,
                        options: CollectionHooks.ModifierOptions,
                    ) => void,
                    options?: CollectionHooks.HookOptionValue,
                ): void
                upsert(
                    hook: (
                        userId: string,
                        doc: T,
                        selector: DefaultMongo.Selector<T>,
                        modifier: DefaultMongo.Modifier<T>,
                        options: CollectionHooks.ModifierOptions,
                    ) => void,
                ): void
            }
            direct: {
                find(
                    selector?:
                        | DefaultMongo.Selector<T>
                        | DefaultMongo.ObjectID
                        | string,
                    options?: {
                        sort?: DefaultMongo.SortSpecifier
                        skip?: number
                        limit?: number
                        fields?: DefaultMongo.FieldSpecifier
                        reactive?: boolean
                        transform?(doc: any): void
                    },
                ): DefaultMongo.Cursor<T>
                findOne(
                    selector?:
                        | DefaultMongo.Selector<T>
                        | DefaultMongo.ObjectID
                        | string,
                    options?: {
                        sort?: DefaultMongo.SortSpecifier
                        skip?: number
                        fields?: DefaultMongo.FieldSpecifier
                        reactive?: boolean
                        transform?(doc: any): void
                    },
                ): T
                insert(doc: T, callback?: () => void): string
                remove(
                    selector:
                        | DefaultMongo.Selector<T>
                        | DefaultMongo.ObjectID
                        | string,
                    callback?: () => void,
                ): number
                update(
                    selector:
                        | DefaultMongo.Selector<T>
                        | DefaultMongo.ObjectID
                        | string,
                    modifier: DefaultMongo.Modifier<T>,
                    options?: {
                        multi?: boolean
                        upsert?: boolean
                        removeEmptyStrings?: boolean
                    },
                    callback?: () => void,
                ): number
                upsert(
                    selector:
                        | DefaultMongo.Selector<T>
                        | DefaultMongo.ObjectID
                        | string,
                    modifier: DefaultMongo.Modifier<T>,
                    options?: {
                        multi?: boolean
                    },
                    callback?: () => void,
                ): { numberAffected?: number; insertedId?: string }
            }
            hookOptions: CollectionHooks.GlobalHookOptions
        }
    }
}

declare namespace CollectionHooks {
    interface ModifierOptions {
        multi?: boolean
        upsert?: boolean
    }

    interface HookOptionValue {
        fetchPrevious?: boolean
    }

    interface LocalHookOptions {
        all?: HookOptionValue
        find?: HookOptionValue
        findOne?: HookOptionValue
        insert?: HookOptionValue
        remove?: HookOptionValue
        update?: HookOptionValue
        upsert?: HookOptionValue
        aggregate?: any
    }

    interface GlobalHookOptions {
        before?: LocalHookOptions
        after?: LocalHookOptions
        all?: LocalHookOptions
    }
}
