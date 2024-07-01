export class BadApiRequest extends Error {
    constructor(readonly code: string) {
      super()
      this.name = 'RequestError'
      this.message = `The Api request has failed with error: ${this.code}`;
    }
  }