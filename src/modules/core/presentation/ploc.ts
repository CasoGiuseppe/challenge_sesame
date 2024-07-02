import type { Router } from "vue-router";
import type { DataExceptions } from "@modules/core/domain/exceptions/models";
import type { IEventEmitter } from "@app/shared/utilities/EventsModel/interfaces/IEventEmitter";

export class Ploc<T> {
    public store: T;
    public router: Router;
    public eventEmitter: IEventEmitter;

    constructor({ store, router, eventEmitter }: { store: T, router: Router, eventEmitter: IEventEmitter }) {
        this.store = store
        this.router = router;
        this.eventEmitter = eventEmitter;
    }

    handleError(error: DataExceptions): string  {
        const { kind } = error;
        let exception = '';

        switch( kind ) {
            case 'BadRequest':
                exception = (error as Extract<DataExceptions, { kind: "BadRequest"}>).error.message
                console.log('router.push', 'Bad Request')
                break;

            case 'UnprocessableRequest':
                exception = (error as Extract<DataExceptions, { kind: "UnprocessableRequest"}>).error.message
                console.log('router.push', 'Unprocessable Content')
                break;
            
            case 'Unauthorized':
                exception = (error as Extract<DataExceptions, { kind: "Unauthorized"}>).error.message
                console.log('router.push', 'Unauthorized')
                break;

            case 'WrongPathRequest':
                exception = (error as Extract<DataExceptions, { kind: "WrongPathRequest"}>).error.message
                console.log('router.push', 'WrongPathRequest')
                break;
            
            case 'UnexpectedError':
                exception = (error as Extract<DataExceptions, { kind: "UnexpectedError"}>).error.message
                console.log('router.push', 'Unexpected Error')
        }

        return exception
    }
}