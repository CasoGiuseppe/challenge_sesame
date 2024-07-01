export class UnexpectedError extends Error {
    constructor(readonly code: string) {
      super()
      this.name = 'UnexpectedError'
      this.message = `Something has gone wrong: ${this.code}`;
    }
  }