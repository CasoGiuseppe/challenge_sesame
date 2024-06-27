import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import type { IVancancyStore } from './interfaces/IVancancyStore';
import { vacancyStore } from './model';

export const useVacancyResponse = defineStore('useVacancyResponse', () => {
    const state = reactive<IVancancyStore>(vacancyStore);

    const setLoadingState = ({ value }: { value: boolean }) => state.loading = value;
    const getLoadingState = computed((): boolean => state.loading)
    
    return {
        state,
        setLoadingState,
        getLoadingState
    }
})

export const useVacancyStore = useVacancyResponse()
export type VacancyResponseStore = Omit<
    ReturnType<typeof useVacancyResponse>,
    keyof ReturnType<typeof defineStore>
>;