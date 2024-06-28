import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import type { IVancancyStore } from './interfaces/IVancancyStore';
import { vacancyStore } from './model';

export const useVacancyResponse = defineStore('useVacancyResponse', () => {
    const state = reactive<IVancancyStore>(vacancyStore);

    const setLoadingState = ({ value }: { value: boolean }) => state.loading = value;
    const setVacancyAreas = ({ collection }: { collection: any[] }) => state.areas = collection

    const getLoadingState = computed((): boolean => state.loading)
    const getVacancyAreas = computed((): any[] => state.areas)

    return {
        state,
        setLoadingState,
        setVacancyAreas,

        getLoadingState,
        getVacancyAreas
    }
})

export const useVacancyStore = useVacancyResponse()
export type VacancyResponseStore = Omit<
    ReturnType<typeof useVacancyResponse>,
    keyof ReturnType<typeof defineStore>
>;