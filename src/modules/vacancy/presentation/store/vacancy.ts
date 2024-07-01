import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import type { IVancancyStoreModel } from './interfaces/IVancancyStore';
import { vacancyStore } from './model';
import type { IVacancyPersistenceData } from '@modules/vacancy/data/models';

export const useVacancyResponse = defineStore('useVacancyResponse', () => {
  const state = reactive<IVancancyStoreModel>(structuredClone(vacancyStore));

  const waitForVacancy = ({ value }: { value: boolean }): void => { state.loading = value };
  const setVacancyAreas = ({ area }: { area: IVacancyPersistenceData }): void => { state.areas = [...state.areas, area] };

  const isLoading = computed((): boolean => state.loading);
  const savedVacancyAreas = computed((): IVacancyPersistenceData[] => state.areas);
  const vacancyAreasAlreadyExists = computed((): boolean => savedVacancyAreas.value.length > 0);
  const getLoadingStateByArea= computed(() => (id: string) => state.areas.find((area: IVacancyPersistenceData) => area.id === id)?.loading);

  return {
    state,
    waitForVacancy,
    setVacancyAreas,

    isLoading,
    vacancyAreasAlreadyExists,
    savedVacancyAreas,
    getLoadingStateByArea
  };
});

export const useVacancyStore = useVacancyResponse();
export type VacancyResponseStore = Omit<
  ReturnType<typeof useVacancyResponse>,
  keyof ReturnType<typeof defineStore>
>;
