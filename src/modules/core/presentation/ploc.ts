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
                exception = (error as Extract<DataExceptions, { kind: "BadRequest"}>).error.message;
                this.router.push({ name: 'error', params: { code: (error as Extract<DataExceptions, { kind: "BadRequest"}>).error.code }})
                break;

            case 'UnprocessableRequest':
                exception = (error as Extract<DataExceptions, { kind: "UnprocessableRequest"}>).error.message;
                this.router.push({ name: 'error', params: { code: (error as Extract<DataExceptions, { kind: "UnprocessableRequest"}>).error.code }})
                break;
            
            case 'Unauthorized':
                exception = (error as Extract<DataExceptions, { kind: "Unauthorized"}>).error.message;
                this.router.push({ name: 'error', params: { code: (error as Extract<DataExceptions, { kind: "Unauthorized"}>).error.code }})
                break;

            case 'WrongPathRequest':
                exception = (error as Extract<DataExceptions, { kind: "WrongPathRequest"}>).error.message;
                this.router.push({ name: 'error', params: { code: (error as Extract<DataExceptions, { kind: "WrongPathRequest"}>).error.code }})
                break;
            
            case 'UnexpectedError':
                exception = (error as Extract<DataExceptions, { kind: "UnexpectedError"}>).error.message;
                this.router.push({ name: 'error' })
                break;
            default:
                exception = 'An unexpected error occurred. Please try again later.';
                this.router.push({ name: 'error' })
        }

        return exception
    }
}