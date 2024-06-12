export interface ICustomValidator {
    ensureValueCollectionExists({ collection, value }:{ collection: Record<string, any>, value: string | number }): boolean;
}