import type { Router } from "vue-router";
import type { DataExceptions } from "../domain/exceptions/models";

export class Ploc<T> {
    public router: Router;

    constructor({ router }: { router: Router }) {
        this.router = router;
    }

    handleError(error: DataExceptions): string  {
        const { kind } = error;
        let exception = '';

        switch( kind ) {
            case 'BadRequest':
                exception = (error as Extract<DataExceptions, { kind: "BadRequest"}>).error.message
                console.log('router.push', 'Bad Request')
                break;
            
            case 'NotFound':
                exception = (error as Extract<DataExceptions, { kind: "NotFound"}>).error.message
                console.log('router.push', 'Not Found')
                break;
            
            case 'UnexpectedError':
                exception = (error as Extract<DataExceptions, { kind: "UnexpectedError"}>).error.message
                console.log('router.push', 'Unexpected Error')
        }

        return exception
    }
}