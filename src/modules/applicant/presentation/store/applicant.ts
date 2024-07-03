import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import type { IApplicantPersistenceData } from '@modules/applicant/data/models/mapper';
import type { IApplicantStoreModel } from './interfaces/IApplicantStore';
import { applicantStore } from './model';

export const useApplicantResponse = defineStore('useApplicantResponse', () => {
  const state = reactive<IApplicantStoreModel>(structuredClone(applicantStore));

  const waitForApplicants = ({ value }: { value: boolean }) => (state.loading = value);
  const waitForCreation = ({ value }: { value: boolean }) => (state.creation = value);
  const setApplicants = ({ applicant }: { applicant: IApplicantPersistenceData }) =>
    (state.applicants = [...state.applicants, applicant]);
  const setApplicantNewArea = ({ employeID, areaID }: { employeID: string; areaID: string }) => {
    state.applicants = state.applicants.map((applicant: IApplicantPersistenceData) => {
      if (applicant.employeeID === employeID) applicant.areaID = areaID;
      return applicant;
    });
  };

  const savedApplicants = computed((): IApplicantPersistenceData[] => state.applicants);
  const applicantsAlreadyExists = computed((): boolean => savedApplicants.value.length > 0);
  const isLoading = computed((): boolean => state.loading);
  const isCreated = computed((): boolean => state.creation);
  const filterdApplicantsByArea = computed( () => (area: string) =>
      state.applicants.filter((applicant: IApplicantPersistenceData) => applicant.areaID === area)
  );
  const returnApplicantById = computed( () => (id: string) =>
      state.applicants.find((applicant: IApplicantPersistenceData) => applicant.employeeID === id)
  );
  return {
    state,

    waitForApplicants,
    waitForCreation,
    setApplicants,
    setApplicantNewArea,

    isLoading,
    isCreated,
    applicantsAlreadyExists,
    filterdApplicantsByArea,
    returnApplicantById
  };
});

export const useApplicantStore = useApplicantResponse();
export type ApplicantResponseStore = Omit<
  ReturnType<typeof useApplicantResponse>,
  keyof ReturnType<typeof defineStore>
>;
