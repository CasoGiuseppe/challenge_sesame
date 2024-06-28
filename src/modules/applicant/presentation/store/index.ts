import { defineStore } from 'pinia';

export const useApplicantResponse = defineStore('useApplicantResponse', () => {})

export const useApplicantStore = useApplicantResponse();
export type ApplicantResponseStore = Omit<
  ReturnType<typeof useApplicantResponse>,
  keyof ReturnType<typeof defineStore>
>;