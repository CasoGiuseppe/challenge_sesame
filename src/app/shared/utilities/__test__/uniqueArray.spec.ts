import { describe, it, expect } from 'vitest';
import { uniqueArray } from '../index';

describe('uniqueArray', () => {
  it('should return unique items based on the specified key', () => {
    const input = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 1, name: 'Alice' },
      { id: 3, name: 'Charlie' },
    ];
    const expectedOutput = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ];
    expect(uniqueArray({ collection: input })).toEqual(expectedOutput);
  });

  it('should handle nested objects and return unique items based on the specified key', () => {
    const input = [
      { id: 1, name: 'Alice', address: { city: 'New York' } },
      { id: 2, name: 'Bob', address: { city: 'Los Angeles' } },
      { id: 1, name: 'Alice', address: { city: 'New York' } },
      { id: 3, name: 'Charlie', address: { city: 'Chicago' } },
    ];
    const expectedOutput = [
      { id: 1, name: 'Alice', address: { city: 'New York' } },
      { id: 2, name: 'Bob', address: { city: 'Los Angeles' } },
      { id: 3, name: 'Charlie', address: { city: 'Chicago' } },
    ];
    expect(uniqueArray({ collection: input })).toEqual(expectedOutput);
  });

  it('should return an empty array if the input collection is empty', () => {
    const input: any[] = [];
    const expectedOutput: any[] = [];
    expect(uniqueArray({ collection: input })).toEqual(expectedOutput);
  });

  it('should return the same array if all items have the same value for the specified key', () => {
    const input = [
      { id: 1, name: 'Alice' },
      { id: 1, name: 'Alice' },
      { id: 1, name: 'Alice' },
    ];
    const expectedOutput = [
      { id: 1, name: 'Alice' },
    ];
    expect(uniqueArray({ collection: input })).toEqual(expectedOutput);
  });

  it('should handle a large input collection efficiently', () => {
    const input = Array.from({ length: 10000 }, (_, i) => ({ id: i, name: `User${i}` }));
    const expectedOutput = Array.from({ length: 10000 }, (_, i) => ({ id: i, name: `User${i}` }));
    expect(uniqueArray({ collection: input })).toEqual(expectedOutput);
  });
});