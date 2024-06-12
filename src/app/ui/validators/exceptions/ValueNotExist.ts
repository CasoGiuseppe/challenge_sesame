export class ValueNotExist extends Error {
    constructor(
      public readonly value: string | number,
      public readonly collection: Record<string, any>
    ) {
      super();
      this.name = 'ValueNotExist'
      this.message = `${value} not found in provided collection ${JSON.stringify(collection)}`;
    }
  }