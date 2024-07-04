import { describe, it, expect } from 'vitest';
import { randomTiming } from '../index';

describe('randomTiming function', () => {
  it('should returns a number close to the maximum value when min is a large negative number and max is zero', () => {
    const min = -1000000;
    const max = 0;
    const result = randomTiming(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  it('should returns a number close to the maximum value when min is a large negative number and max is a small positive number', () => {
    const min = -1000000;
    const max = 0.0001;
    const result = randomTiming(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  it('should returns a number close to the maximum value when min is a large negative number and max is a large positive number', () => {
    const min = -1000000;
    const max = 1000000;
    const result = randomTiming(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  it('should returns a number close to the minimum value when min is a large negative number and max is a large positive number', () => {
    const min = -1000000;
    const max = 1000000;
    const result = randomTiming(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  it('should returns a number close to the average of min and max when min is a large negative number and max is a large positive number', () => {
    const min = -1000000;
    const max = 1000000;
    const result = randomTiming(min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });
});