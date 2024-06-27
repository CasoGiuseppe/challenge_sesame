import { BadApiRequest } from "./BadApiRequest"
import { UnexpectedError } from "./UnexpectedError"
import { UnprocessableContent } from "./UnprocessableContent"
import { WrongPathRequest } from "./WrongPathRequest"

export default (code: string) =>{
    return {
        400: { kind: "BadRequest", error: new BadApiRequest(code) },
        422: { kind: "UnprocessableRequest", error: new UnprocessableContent(code) },
        401: { kind: "Unauthorized", error: new BadApiRequest(code) },
        404: { kind: "WrongPathRequest", error: new WrongPathRequest(code) },
        500: { kind: "UnexpectedError", error: new UnexpectedError(code) }
    }
}