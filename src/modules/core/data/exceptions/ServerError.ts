export class ServerError extends Error {
    constructor(readonly code: string) {
      super()
      this.name = 'Server Error'
      this.message = `The server has respond with code: ${this.code}`;
    }
  }