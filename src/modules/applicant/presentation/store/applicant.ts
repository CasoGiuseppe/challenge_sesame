import { defineStore } from 'pinia';
import { reactive } from 'vue';
import type { IApplicantPersistenceData } from '@modules/applicant/data/models/mapper';
import type { IApplicantStore } from './interfaces/IApplicantStore';
import { applicantStore } from './model';

export const useApplicantResponse = defineStore('useApplicantResponse', () => {
  const state = reactive<IApplicantStore>(structuredClone(applicantStore));

  const setApplicants = ({ applicant }: { applicant: IApplicantPersistenceData }) => (state.applicants = [...state.applicants, applicant]);

  return {
    state,

    setApplicants
  }
})

export const useApplicantStore = useApplicantResponse();
export type ApplicantResponseStore = Omit<
  ReturnType<typeof useApplicantResponse>,
  keyof ReturnType<typeof defineStore>
>;