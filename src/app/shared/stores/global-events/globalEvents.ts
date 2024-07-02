import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import { globalStore } from './model';
import type { IEventPropsModel, IGlobalEventsStoreModel } from './interfaces/IGlobalEventsStore';

export const useGlobalEventsStates = defineStore('useGlobalEventsStates', () => {
    const state = reactive<IGlobalEventsStoreModel>(structuredClone(globalStore));

    const setEmittedEventState = ({ type, id, mode }: { type: string, id: string, mode: string }) => {
      state.events = [...state.events, { type, id, mode }]
    };

    const emittedEventsState = computed((): IEventPropsModel[] => state.events);

    return {
        setEmittedEventState,
        emittedEventsState,
    }
})

export const useGlobalEventsStore = useGlobalEventsStates();
export type GlobalEventsStore = Omit<
  ReturnType<typeof useGlobalEventsStates>,
  keyof ReturnType<typeof defineStore>
>;