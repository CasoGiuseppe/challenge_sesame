import { describe, it, expect } from 'vitest';
import { Applicant } from '../../domain/core/Applicant';
import { UniqueEntityID } from '@/modules/core/domain/valueObjects/UniqueEntityID';

describe('Applicant', () => {
  it('should create an instance of Applicant with valid properties', () => {
    const id = new UniqueEntityID();
    const props = {
      employeeId: 'EMP001',
      firstName: 'John',
      lastName: 'Doe',
      createBy: 'admin',
      createdAt: new Date(),
      statusId: 'ACTIVE'
    };

    const applicant = Applicant.createApplicant({ id, props });

    expect(applicant.getEmployeeId).toBe(props.employeeId);
    expect(applicant.getFirstName).toBe(props.firstName);
    expect(applicant.getLastName).toBe(props.lastName);
    expect(applicant.getCompleteName).toBe(`${props.firstName} ${props.lastName}`);
    expect(applicant.getCreationDate).toEqual(props.createdAt);
    expect(applicant.getCreatedBy).toBe(props.createBy);
    expect(applicant.getStatus).toBe(props.statusId);
  });

  it('should return the correct creation date', () => {
    const id = new UniqueEntityID();
    const props = {
      employeeId: 'EMP001',
      firstName: 'John',
      lastName: 'Doe',
      createBy: 'admin',
      createdAt: new Date('2022-01-01T00:00:00'),
      statusId: 'ACTIVE'
    };

    const applicant = Applicant.createApplicant({ id, props });
    const expectedDate = new Date('2022-01-01T00:00:00');

    expect(applicant.getCreationDate).toEqual(expectedDate);
  });

  it('should return the correct creation date with a different date', () => {
    const id = new UniqueEntityID();
    const props = {
      employeeId: 'EMP002',
      firstName: 'Jane',
      lastName: 'Smith',
      createBy: 'user',
      createdAt: new Date('2022-02-28T12:34:56'),
      statusId: 'INACTIVE'
    };

    const applicant = Applicant.createApplicant({ id, props });
    const expectedDate = new Date('2022-02-28T12:34:56');

    expect(applicant.getCreationDate).toEqual(expectedDate);
  });

  it('should return the correct creation date with a future date', () => {
    const id = new UniqueEntityID();
    const props = {
      employeeId: 'EMP003',
      firstName: 'Alice',
      lastName: 'Johnson',
      createBy: 'admin',
      createdAt: new Date('2023-05-15T08:00:00'),
      statusId: 'ACTIVE'
    };

    const applicant = Applicant.createApplicant({ id, props });
    const expectedDate = new Date('2023-05-15T08:00:00');

    expect(applicant.getCreationDate).toEqual(expectedDate);
  });

  it('should return the correct creation date with a past date', () => {
    const id = new UniqueEntityID();
    const props = {
      employeeId: 'EMP004',
      firstName: 'Bob',
      lastName: 'Williams',
      createBy: 'user',
      createdAt: new Date('2021-12-31T23:59:59'),
      statusId: 'INACTIVE'
    };

    const applicant = Applicant.createApplicant({ id, props });
    const expectedDate = new Date('2021-12-31T23:59:59');

    expect(applicant.getCreationDate).toEqual(expectedDate);
  });

  it('should return the correct creation date with a date in the distant past', () => {
    const id = new UniqueEntityID();
    const props = {
      employeeId: 'EMP005',
      firstName: 'Charlie',
      lastName: 'Brown',
      createBy: 'admin',
      createdAt: new Date('1900-01-01T00:00:00'),
      statusId: 'ACTIVE'
    };

    const applicant = Applicant.createApplicant({ id, props });
    const expectedDate = new Date('1900-01-01T00:00:00');

    expect(applicant.getCreationDate).toEqual(expectedDate);
  });
});
