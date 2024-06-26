export class NotFound extends Error {
    constructor(readonly code: string) {
      super()
      this.name = 'Not found'
      this.message = `The resource was not found: ${this.code}`;
    }
  }