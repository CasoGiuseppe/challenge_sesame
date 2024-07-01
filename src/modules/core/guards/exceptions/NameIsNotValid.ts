export class NameIncorrectFormat extends Error {
    constructor(
      public readonly value: string,
    ) {
      super();
      this.name = 'ValidationNameError'
      this.message = `Provided value ${value} had not correct format or has not valid length.`
    }
  }