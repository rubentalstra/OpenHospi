import { describe, it, expect } from 'vitest';
import {
  GENDERS, GENDER_PREFERENCES, LANGUAGES, AFFILIATIONS,
  LIFESTYLE_TAGS, HOUSE_TYPES, ROOM_STATUSES, FURNISHINGS,
  ROOM_FEATURES, RENTAL_TYPES, LOCATION_TAGS, CITIES,
  APPLICATION_STATUSES, REVIEW_DECISIONS, INVITATION_STATUSES,
  HOUSEMATE_ROLES, CONVERSATION_TYPES, MESSAGE_TYPES,
  DELIVERY_STATUSES, ADMIN_ACTIONS, REPORT_REASONS, REPORT_STATUSES,
} from './enums.js';

const ALL_ENUMS = {
  GENDERS,
  GENDER_PREFERENCES,
  LANGUAGES,
  AFFILIATIONS,
  LIFESTYLE_TAGS,
  HOUSE_TYPES,
  ROOM_STATUSES,
  FURNISHINGS,
  ROOM_FEATURES,
  RENTAL_TYPES,
  LOCATION_TAGS,
  CITIES,
  APPLICATION_STATUSES,
  REVIEW_DECISIONS,
  INVITATION_STATUSES,
  HOUSEMATE_ROLES,
  CONVERSATION_TYPES,
  MESSAGE_TYPES,
  DELIVERY_STATUSES,
  ADMIN_ACTIONS,
  REPORT_REASONS,
  REPORT_STATUSES,
};

describe('@openhospi/shared — enums', () => {
  it('exports 22 enum arrays', () => {
    expect(Object.keys(ALL_ENUMS)).toHaveLength(22);
  });

  it.each(Object.entries(ALL_ENUMS))('%s is a non-empty readonly array', (_name, arr) => {
    expect(Array.isArray(arr)).toBe(true);
    expect(arr.length).toBeGreaterThan(0);
    expect(Object.isFrozen(arr)).toBe(true);
  });

  it.each(Object.entries(ALL_ENUMS))('%s contains only unique values', (_name, arr) => {
    const unique = new Set(arr);
    expect(unique.size).toBe(arr.length);
  });

  it.each(Object.entries(ALL_ENUMS))('%s values are lowercase/snake_case strings', (_name, arr) => {
    for (const value of arr) {
      expect(typeof value).toBe('string');
      expect(value).toMatch(/^[a-z][a-z0-9_]*$/);
    }
  });

  it('GENDERS has expected values', () => {
    expect(GENDERS).toEqual(['man', 'vrouw', 'zeg_ik_liever_niet']);
  });

  it('CITIES includes major Dutch cities and "anders"', () => {
    expect(CITIES).toContain('amsterdam');
    expect(CITIES).toContain('groningen');
    expect(CITIES).toContain('utrecht');
    expect(CITIES).toContain('anders');
  });

  it('LIFESTYLE_TAGS has at least 20 tags', () => {
    expect(LIFESTYLE_TAGS.length).toBeGreaterThanOrEqual(20);
  });
});
