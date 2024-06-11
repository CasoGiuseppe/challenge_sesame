import { CustomErrorClass } from "@/modules/core/presentation/exceptions/CustomErrorClass"

export const ErrorsKind = () =>{
    return {
        400: { kind: "BadRequest", error: new CustomErrorClass() },
        404: { kind: "NotFound", error: new CustomErrorClass() },
        500: { kind: "UnexpectedError", error: new CustomErrorClass() }
    }
}