export class DateIncorrectFormat extends Error {
    constructor(
      public readonly value: string,
    ) {
      super();
      this.name = 'ValidationDateError'
      this.message = `Provided date ${value} has not a correct format`
    }
  }