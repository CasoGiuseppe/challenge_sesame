export class UnauthorizedRequest extends Error {
    constructor(readonly code: string) {
      super()
      this.name = 'Unauthorized'
      this.message = `The Api request has failed with error: ${this.code}`;
    }
  }