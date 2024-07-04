import { describe, it, expect } from 'vitest';
import { compareDates } from '../index';

describe('compareDates function', () => {
  it('should return true when input date is the same as the current date (en-US format)', () => {
    const inputDate = new Date().toLocaleDateString('es-ES');
    expect(compareDates({ input: inputDate })).toBe(true);
  });

  it('should return false when input date is different from the current date (es-ES format)', () => {
    const inputDate = new Date(new Date().setDate(new Date().getDate() - 1)).toLocaleDateString('en-US');
    expect(compareDates({ input: inputDate })).toBe(false);
  });

  it('should return false when input date is in a different format (e.g., YYYY-MM-DD)', () => {
    const inputDate = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
    expect(compareDates({ input: inputDate })).toBe(false);
  });

  it('should return false when input date is in a different format (e.g., MM/DD/YYYY)', () => {
    const inputDate = new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' }); // Format: MM/DD/YYYY
    expect(compareDates({ input: inputDate })).toBe(false);
  });

  it('should return false when input date is in a different locale (e.g., fr-FR)', () => {
    const inputDate = new Date().toLocaleDateString('fr-FR');
    expect(compareDates({ input: inputDate })).toBe(false);
  });
});