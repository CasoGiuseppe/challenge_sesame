import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import { globalStore } from './model';
import type { IGlobalStoreModel } from './interfaces/IGlobalStore';

export const useGlobalStates = defineStore('useGlobalStates', () => {
    const state = reactive<IGlobalStoreModel>(structuredClone(globalStore));

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