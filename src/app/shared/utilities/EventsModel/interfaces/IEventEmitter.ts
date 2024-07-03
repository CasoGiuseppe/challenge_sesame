import type { EventCallback } from "../types";

export interface IEventEmitter {
    subscribe(eventName: string, callback: EventCallback): void,
    unsubscribe(eventName: string, callback: EventCallback): void,
    emit(eventName: string, ...args: any[]): void
}