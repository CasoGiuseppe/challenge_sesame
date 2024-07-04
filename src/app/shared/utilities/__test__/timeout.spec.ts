import { describe, it, expect } from 'vitest';
import { timeout } from '../index';

describe('timeout function', () => {
  it('should resolve immediately when called with 0 milliseconds', async () => {
    const startTime = Date.now();
    await timeout(0);
    const endTime = Date.now();
    const executionTime = endTime - startTime;

    expect(executionTime).toBeLessThanOrEqual(10);
  });

  it('should resolve after a random time between 1100 and 1800 milliseconds', async () => {
    const startTime = Date.now();
    await timeout();
    const endTime = Date.now();
    const executionTime = endTime - startTime;

    expect(executionTime).toBeGreaterThanOrEqual(1100);
    expect(executionTime).toBeLessThanOrEqual(1800);
  });

  it('should resolve after a specific time when called with a non-zero value', async () => {
    const specificTime = 500;
    const startTime = Date.now();
    await timeout(specificTime);
    const endTime = Date.now();
    const executionTime = endTime - startTime;

    expect(executionTime).toBeGreaterThanOrEqual(specificTime);
    expect(executionTime).toBeLessThanOrEqual(specificTime + 10); // Allow a small margin of error due to async nature
  });
});