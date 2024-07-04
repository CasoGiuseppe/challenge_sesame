import { describe, it, expect, vi } from 'vitest';
import { generateUUID } from '../index';

// Mock crypto.getRandomValues to always return a predictable value
const mockCrypto = {
  getRandomValues: vi.fn().mockReturnValue(new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])),
};

Object.defineProperty(global, 'crypto', {
  value: mockCrypto,
  writable: true,
});

describe('generateUUID', () => {
  it('should generates a UUID with all lowercase letters', () => {
    const uuid = generateUUID();
    expect(uuid).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
    expect(uuid).not.toMatch(/[A-Z]/);
  });


  it('should generates a UUID with the correct format', () => {
    const uuid = generateUUID();
    expect(uuid).toHaveLength(36);
    expect(uuid.split('-')).toHaveLength(5);
  });

  it('should generates a UUID with the correct version', () => {
    const uuid = generateUUID();
    const version = parseInt(uuid.split('-')[1].substring(0, 1));
    expect(version).toBe(0);
  });

  it('should generates a UUID with the correct variant', () => {
    const uuid = generateUUID();
    const variant = parseInt(uuid.split('-')[1].substring(1, 2), 16);
    expect(variant).toBe(1);
  });
});