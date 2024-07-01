export class WrongPathRequest extends Error {
    constructor(readonly code: string) {
      super()
      this.name = 'WrongPath'
      this.message = `The path id is wrong: ${this.code}`;
    }
  }