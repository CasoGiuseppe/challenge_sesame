import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import { globalStore } from './model';
import type { IGlobalEventsStoreModel } from './interfaces/IGlobalEventsStore';

export const useGlobalEventsStates = defineStore('useGlobalEventsStates', () => {
    const state = reactive<IGlobalEventsStoreModel>(structuredClone(globalStore));

    const setSuccessEvent = ({ value }: { value: string }) => (state.success = [...state.success, value]);
    const setExceptionEvent = ({ value }: { value: string }) => (state.exception = [...state.exception, value]);

    const emittedSuccess = computed((): string[] => state.success);
    const emittedException = computed((): string[] => state.exception);

    return {
        setSuccessEvent,
        setExceptionEvent,

        emittedSuccess,
        emittedException
    }
})

export const useGlobalEventsStore = useGlobalEventsStates();
export type GlobalEventsStore = Omit<
  ReturnType<typeof useGlobalEventsStates>,
  keyof ReturnType<typeof defineStore>
>;