import { BadApiRequest } from "./BadApiRequest"
import { UnexpectedError } from "./UnexpectedError"

export default (code: string) =>{
    return {
        400: { kind: "BadRequest", error: new BadApiRequest(code) },
        401: { kind: "Unauthorized", error: new BadApiRequest(code) },
        500: { kind: "UnexpectedError", error: new UnexpectedError(code) }
    }
}