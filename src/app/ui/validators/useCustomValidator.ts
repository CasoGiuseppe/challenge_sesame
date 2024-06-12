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

    return {
        ensureValueCollectionExists
    }
}

const { ensureValueCollectionExists } = useCustomValidator();
export { ensureValueCollectionExists };