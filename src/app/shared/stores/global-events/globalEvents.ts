import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import { globalStore } from './model';
import type { IEventPropsModel, IGlobalEventsStoreModel } from './interfaces/IGlobalEventsStore';

export const useGlobalEventsStates = defineStore('useGlobalEventsStates', () => {
    const state = reactive<IGlobalEventsStoreModel>(structuredClone(globalStore));

    const setEmittedEventState = ({ type, id, translation }: { type: string, id: string, translation: string }) => {
      state.events = [...state.events, { type, id, translation }]
    };
    const removeEventByID = ({ id }: { id: string }) => {
      const nodeToRemove = state.events.findIndex(key => key.id === id)
      state.events.splice(nodeToRemove, 1)
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