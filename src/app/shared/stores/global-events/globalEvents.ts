import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import { globalStore } from './model';
import type { IEventPropsModel, IGlobalEventsStoreModel } from './interfaces/IGlobalEventsStore';

export const useGlobalEventsStates = defineStore('useGlobalEventsStates', () => {
    const state = reactive<IGlobalEventsStoreModel>(structuredClone(globalStore));

    const setEmittedEventState = ({ type, id, mode }: { type: string, id: string, mode: string }) => {
      state.events = [...state.events, { type, id, mode }]
    };
    const removeEventByID = ({ id }: { id: string }) => {
      console.log(id)
      state.events = state.events.filter((event) => { event.id !== id })
    };

    const emittedEventsDetails = computed((): IEventPropsModel[] => state.events);
    const hasEventsToShow = computed((): boolean => emittedEventsDetails.value.length > 0);

    return {
      state,

      setEmittedEventState,
      removeEventByID,

      emittedEventsDetails,
      hasEventsToShow
    }
})

export const useGlobalEventsStore = useGlobalEventsStates();
export type GlobalEventsStore = Omit<
  ReturnType<typeof useGlobalEventsStates>,
  keyof ReturnType<typeof defineStore>
>;