import type { IEventEmitter } from "./interfaces/IEventEmitter";
import type { EventCallback } from "./types";

export class EventEmitter implements IEventEmitter {
    private events: Record<string, EventCallback[]>;
    constructor() {
      this.events = {};
    }
    public subscribe(eventName: string, callback: EventCallback): void {
      if (!this.events[eventName]) {
        this.events[eventName] = [];
      }
      this.events[eventName].push(callback);
    }
    public unsubscribe(eventName: string, callback: EventCallback): void {
      const eventCallbacks = this.events[eventName];
      if (eventCallbacks) {
        this.events[eventName] = eventCallbacks.filter(
          (cb) => cb !== callback
        );
      }
    }
    public emit(eventName: string, ...args: any[]): void {
      const eventCallbacks = this.events[eventName];
      if (eventCallbacks) {
        eventCallbacks.forEach((callback) => {
          callback(...args);
        });
      }
    }
  }