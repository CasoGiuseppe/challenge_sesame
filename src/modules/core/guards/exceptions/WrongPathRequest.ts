export class WrongPathRequest extends Error {
    constructor(readonly code: string) {
      super()
      this.name = 'Wrong Path'
      this.message = `The path id is wrong: ${this.code}`;
    }
  }