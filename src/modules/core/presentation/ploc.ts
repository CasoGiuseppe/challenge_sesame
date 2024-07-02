import type { Router } from "vue-router";
import type { DataExceptions } from "@modules/core/domain/exceptions/models";
import type { IEventEmitter } from "@app/shared/utilities/EventsModel/interfaces/IEventEmitter";
import type { GlobalEventsStore } from "@app/shared/stores/global-events/globalEvents";

export class Ploc<T> {
    public store: T;
    public router: Router;
    public eventEmitter: IEventEmitter;
    public global: GlobalEventsStore;

    constructor({
        store,
        router,
        eventEmitter,
        global
    }: { store: T, router: Router, eventEmitter: IEventEmitter, global: GlobalEventsStore }) {
        this.store = store
        this.router = router;
        this.eventEmitter = eventEmitter;
        this.global = global;
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