import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';
import type { IApplicantPersistenceData } from '@modules/applicant/data/models/mapper';
import type { IApplicantStoreModel } from './interfaces/IApplicantStore';
import { applicantStore } from './model';
import type { IUpdateApplicant } from '@modules/applicant/data/models/mapper';
import { UUID } from '@/modules/core/providers/Uuid-v4/Uuid';

export const useApplicantResponse = defineStore('useApplicantResponse', () => {
  const state = reactive<IApplicantStoreModel>(structuredClone(applicantStore));

  const waitForApplicants = ({ value }: { value: boolean }):void => { state.loading = value };
  const waitForCreation = ({ value }: { value: boolean }):void => { state.creation = value };
  const setApplicants = ({ applicant }: { applicant: IApplicantPersistenceData }): void => { state.applicants = [...state.applicants, applicant] };
  const updateApplicantArea = ({ areaID, employeeID}: IUpdateApplicant): void => {
    const movedApplicant = state.applicants.find((el: any) => el.employeeID === employeeID)
    if(!movedApplicant) return;
    movedApplicant.areaID = areaID
    movedApplicant.UUID = UUID.generate()
  }

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
    updateApplicantArea,

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
