import { BadApiRequest } from "./BadApiRequest"
import { NotFound } from "./NotFound"
import { UnexpectedError } from "./UnexpectedError"

export default (code: string) =>{
    return {
        400: { kind: "BadRequest", error: new BadApiRequest(code) },
        404: { kind: "NotFound", error: new NotFound(code) },
        500: { kind: "UnexpectedError", error: new UnexpectedError(code) }
    }
}