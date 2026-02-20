import { describe, it, expect } from 'vitest';
import { INSTITUTION_MAP, getInstitution } from './institution-mapping.js';

describe('@openhospi/surfconext — institution mapping', () => {
  it('contains all 14 WO universities', () => {
    const woInstitutions = Object.values(INSTITUTION_MAP).filter(i => i.type === 'WO');
    expect(woInstitutions).toHaveLength(14);
  });

  it('contains HBO institutions', () => {
    const hboInstitutions = Object.values(INSTITUTION_MAP).filter(i => i.type === 'HBO');
    expect(hboInstitutions.length).toBeGreaterThanOrEqual(11);
  });

  it('contains MBO institutions', () => {
    const mboInstitutions = Object.values(INSTITUTION_MAP).filter(i => i.type === 'MBO');
    expect(mboInstitutions.length).toBeGreaterThanOrEqual(2);
  });

  it('contains UMC institutions', () => {
    const umcInstitutions = Object.values(INSTITUTION_MAP).filter(i => i.type === 'UMC');
    expect(umcInstitutions.length).toBeGreaterThanOrEqual(3);
  });

  it('resolves known WO domains', () => {
    const rug = getInstitution('rug.nl');
    expect(rug.short).toBe('RUG');
    expect(rug.name).toBe('Rijksuniversiteit Groningen');
    expect(rug.type).toBe('WO');
    expect(rug.city).toBe('Groningen');

    const uu = getInstitution('uu.nl');
    expect(uu.short).toBe('UU');
    expect(uu.type).toBe('WO');
  });

  it('resolves known HBO domains', () => {
    const hva = getInstitution('hva.nl');
    expect(hva.short).toBe('HvA');
    expect(hva.type).toBe('HBO');
    expect(hva.city).toBe('Amsterdam');
  });

  it('resolves known UMC domains', () => {
    const umcg = getInstitution('umcg.nl');
    expect(umcg.short).toBe('UMCG');
    expect(umcg.type).toBe('UMC');
  });

  it('returns fallback for unknown domains', () => {
    const unknown = getInstitution('unknown-school.nl');
    expect(unknown.type).toBe('Overig');
    expect(unknown.name).toBe('unknown-school.nl');
    expect(unknown.short).toBe('Unknown-school');
  });

  it('fallback strips common TLDs', () => {
    const result = getInstitution('myschool.edu');
    expect(result.short).toBe('Myschool');
  });

  it('every institution has required fields', () => {
    for (const [domain, info] of Object.entries(INSTITUTION_MAP)) {
      expect(info.short, `${domain} missing short`).toBeTruthy();
      expect(info.name, `${domain} missing name`).toBeTruthy();
      expect(info.type, `${domain} missing type`).toBeTruthy();
    }
  });

  it('has at least 28 total institutions', () => {
    expect(Object.keys(INSTITUTION_MAP).length).toBeGreaterThanOrEqual(28);
  });
});
