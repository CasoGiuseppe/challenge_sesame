import { ValueNotExist } from "./exceptions/ValueNotExist";
import type { ICustomValidator } from "./interfaces";

function useCustomValidator(): ICustomValidator {
    const ensureValueCollectionExists = ({
        collection,
        value
    }: { collection: Record<string, any>, value: string | number }): boolean => {
        const checkValueInCollection = Object.values(collection).includes(value);
        if (!checkValueInCollection) throw new ValueNotExist(value, collection);
        return checkValueInCollection;
    }

    const ensureValueIsHex = ({ value }: { value: string | number }): boolean => {
        const pattern = /^[0-9a-fA-F]+$/;
        return pattern.test(value as string);
    }

    return {
        ensureValueCollectionExists,
        ensureValueIsHex
    }
}

const { ensureValueCollectionExists, ensureValueIsHex } = useCustomValidator();
export { ensureValueCollectionExists, ensureValueIsHex };