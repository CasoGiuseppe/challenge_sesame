import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import type { IVancancyStore } from './interfaces/IVancancyStore';
import { vacancyStore } from './model';
import type { IVacancyPersistenceData } from '@modules/vacancy/data/models';

export const useVacancyResponse = defineStore('useVacancyResponse', () => {
  const state = reactive<IVancancyStore>(vacancyStore);

  const setLoadingState = ({ value }: { value: boolean }) => (state.loading = value);
  const setVacancyAreas = ({ area }: { area: IVacancyPersistenceData }) => (state.areas = [...state.areas, area]);

  const getLoadingState = computed((): boolean => state.loading);
  const savedVacancyAreas = computed((): IVacancyPersistenceData[] => state.areas);
  const vacancyAreasAreSaved = computed((): boolean => savedVacancyAreas.value.length > 0);
  const getLoadingStateByArea= computed(() => (id: string) => state.areas.find((area: IVacancyPersistenceData) => area.id === id)?.loading);

  return {
    state,
    setLoadingState,
    setVacancyAreas,

    getLoadingState,
    vacancyAreasAreSaved,
    savedVacancyAreas,
    getLoadingStateByArea
  };
});

export const useVacancyStore = useVacancyResponse();
export type VacancyResponseStore = Omit<
  ReturnType<typeof useVacancyResponse>,
  keyof ReturnType<typeof defineStore>
>;
