import type { IVacancyID } from "@modules/recruitment/modules/positions/data/models"

export interface IApplicantDTOResponse {
  data: IApplicantDataResponse[] | IApplicantDataResponse
  meta: IApplicantMeta
}

export interface IApplicantDataResponse {
  id: string
  companyId: string
  vacancy: IAPPlicantVacancy
  vacancyId: string
  firstName: string
  lastName: string
  email: string
  phone: string
  type: string
  statusId: string
  status: IApplicantStatus
  linkedInURL: string
  desiredSalary: string
  startWorkDate: string
  evaluation: number
  web: string
  location: string
  hasDocument: boolean
  comment: string
  appliedAt: string
  threadId: string
  lastComment: IApplicantLastComment
  numComments: number
  imageProfileURL: string
  checklist: IApplicantChecklist
  createdAt: string
  updatedAt: string
  employeeId: string
}

export interface IAPPlicantVacancy {
  id: string
  companyId: string
  name: string
  description: string
  department: string
  contactType: string
  experience: string
  createdById: string
  status: string
  openedAt: string
  createdAt: string
  updatedAt: string
  public: boolean
  locationVacancy: IApplicantLocationVacancy
  scheduleType: IApplicantScheduleType
  category: IApplicantCategory
}

export interface IApplicantLocationVacancy {
  id: string
  companyId: string
  name: string
  createdAt: string
}

export interface IApplicantScheduleType {
  id: string
  companyId: string
  name: string
  createdAt: string
}

export interface IApplicantCategory {
  id: string
  companyId: string
  name: string
  createdAt: string
}

export interface IApplicantStatus {
  id: string
  name: string
  companyId: string
  order: number
  createdAt: string
  updatedAt: string
  vacancyId: string
}

export interface IApplicantLastComment {}

export interface IApplicantChecklist {}

export interface IApplicantMeta {
  currentPage: number
  lastPage: number
  total: number
  perPage: number
}

export interface IApplicantPostData {
  firstName: string,
  lastName: string,
  vacancyId: IVacancyID
  statusId: string,
}
