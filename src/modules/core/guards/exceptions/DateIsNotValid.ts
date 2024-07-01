export class DateIncorrectFormat extends Error {
    constructor(
      public readonly value: string,
    ) {
      super();
      this.name = 'ValidationDateError'
      this.message = `Provided date ${value} is not a correct format`
    }
  }