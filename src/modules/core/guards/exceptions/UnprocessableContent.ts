export class UnprocessableContent extends Error {
    constructor(readonly code: string) {
      super()
      this.name = 'UnprocessableContent'
      this.message = `The request could not be processed because has occurred an error: ${this.code}`;
    }
  }