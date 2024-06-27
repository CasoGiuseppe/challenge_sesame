import { defineStore } from 'pinia';
import { reactive } from 'vue';
import type { IVancancyStore } from './interfaces/IVancancyStore';
import { vacancyStore } from './model';

export const useVacancyResponse = defineStore('useVacancyResponse', () => {
    const state = reactive<IVancancyStore>(vacancyStore);

    const setLoadingState = ({ value }: { value: boolean }) => state.loading = value;

    return {
        setLoadingState
    }
})

export const useVacancyStore = useVacancyResponse()
export type VacancyResponseStore = Omit<
    ReturnType<typeof useVacancyResponse>,
    keyof ReturnType<typeof defineStore>
>;