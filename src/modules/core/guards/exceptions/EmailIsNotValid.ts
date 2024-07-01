export class EmailIncorrectFormat extends Error {
    constructor(
      public readonly value: string,
      public readonly message: string
    ) {
      super(message);
      this.name = 'ValidationEmailError'
    }
  }