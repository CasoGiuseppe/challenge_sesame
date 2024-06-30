import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import type { IApplicantPersistenceData } from '@modules/applicant/data/models/mapper';
import type { IApplicantStoreModel } from './interfaces/IApplicantStore';
import { applicantStore } from './model';

export const useApplicantResponse = defineStore('useApplicantResponse', () => {
  const state = reactive<IApplicantStoreModel>(structuredClone(applicantStore));

  const setLoadingState = ({ value }: { value: boolean }) => (state.loading = value);
  const setApplicants = ({ applicant }: { applicant: IApplicantPersistenceData }) => (state.applicants = [...state.applicants, applicant]);

  const savedApplicants = computed((): IApplicantPersistenceData[] => state.applicants);
  const applicantsAlreadyExists = computed((): boolean => savedApplicants.value.length > 0);
  const isLoading = computed((): boolean => state.loading);
  const filterdApplicantsByArea = computed(() => (area: string) => state.applicants.filter((applicant: IApplicantPersistenceData) => applicant.areaID === area))
  
  return {
    state,

    setLoadingState,
    setApplicants,
    
    isLoading,
    applicantsAlreadyExists,
    filterdApplicantsByArea
  }
})

export const useApplicantStore = useApplicantResponse();
export type ApplicantResponseStore = Omit<
  ReturnType<typeof useApplicantResponse>,
  keyof ReturnType<typeof defineStore>
>;