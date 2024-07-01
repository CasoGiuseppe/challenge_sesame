export class DateIncorrectFormat extends Error {
    constructor(
      public readonly value: string,
      public readonly message: string,
    ) {
      super();
      this.name = 'ValidationDateError'
    }
  }