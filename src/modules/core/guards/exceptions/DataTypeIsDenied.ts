export class DataTypeIsDenied extends Error {
    constructor(readonly code: string) {
      super()
      this.name = 'Data type denied'
      this.message = `The data type is denided with error: ${this.code}`;
    }
  }