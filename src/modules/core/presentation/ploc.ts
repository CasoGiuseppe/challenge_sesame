import type { Router } from "vue-router";
import type { DataExceptions } from "@modules/core/domain/exceptions/models";
import type { IEventEmitter } from "@app/shared/utilities/EventsModel/interfaces/IEventEmitter";
import type { GlobalEventsStore } from "@app/shared/stores/global-events/globalEvents";

export class Ploc<T> {
    public store: T;
    public router: Router;
    
    constructor({
        store,
        router,
    }: { store: T, router: Router }) {
        this.store = store
        this.router = router;    
    }

    handleError(error: DataExceptions): string  {
        const { kind } = error;
        let exception = '';

        switch( kind ) {
            case 'BadRequest':
                exception = (error as Extract<DataExceptions, { kind: "BadRequest"}>).error.message
                break;

            case 'UnprocessableRequest':
                exception = (error as Extract<DataExceptions, { kind: "UnprocessableRequest"}>).error.message
                break;
            
            case 'Unauthorized':
                exception = (error as Extract<DataExceptions, { kind: "Unauthorized"}>).error.message
                break;

            case 'WrongPathRequest':
                exception = (error as Extract<DataExceptions, { kind: "WrongPathRequest"}>).error.message
                break;
            
            case 'UnexpectedError':
                exception = (error as Extract<DataExceptions, { kind: "UnexpectedError"}>).error.message
                break;
            default:
                exception = 'An unexpected error occurred. Please try again later.'
        }

        return exception
    }
}