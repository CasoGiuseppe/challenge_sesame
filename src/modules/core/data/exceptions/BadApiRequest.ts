export class BadApiRequest extends Error {
    constructor(readonly code: string) {
      super()
      this.name = 'Request error'
      this.message = `The Api request has failed with error: ${this.code}`;
    }
  }