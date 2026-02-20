export type InstitutionType = 'WO' | 'HBO' | 'MBO' | 'UMC' | 'Onderzoek' | 'Overig';

export interface InstitutionInfo {
  short: string;
  name: string;
  type: InstitutionType;
  city?: string;
}

export const INSTITUTION_MAP: Record<string, InstitutionInfo> = {
  // WO — Universiteiten (14 research universities)
  'eur.nl':                  { short: 'EUR',    name: 'Erasmus Universiteit Rotterdam',      type: 'WO', city: 'Rotterdam' },
  'ru.nl':                   { short: 'RU',     name: 'Radboud Universiteit',                type: 'WO', city: 'Nijmegen' },
  'rug.nl':                  { short: 'RUG',    name: 'Rijksuniversiteit Groningen',         type: 'WO', city: 'Groningen' },
  'tue.nl':                  { short: 'TU/e',   name: 'Technische Universiteit Eindhoven',   type: 'WO', city: 'Eindhoven' },
  'tudelft.nl':              { short: 'TUD',    name: 'Technische Universiteit Delft',       type: 'WO', city: 'Delft' },
  'tilburguniversity.edu':   { short: 'TiU',    name: 'Tilburg University',                  type: 'WO', city: 'Tilburg' },
  'maastrichtuniversity.nl': { short: 'UM',     name: 'Universiteit Maastricht',             type: 'WO', city: 'Maastricht' },
  'uva.nl':                  { short: 'UvA',    name: 'Universiteit van Amsterdam',          type: 'WO', city: 'Amsterdam' },
  'utwente.nl':              { short: 'UT',     name: 'Universiteit Twente',                 type: 'WO', city: 'Enschede' },
  'uu.nl':                   { short: 'UU',     name: 'Universiteit Utrecht',                type: 'WO', city: 'Utrecht' },
  'vu.nl':                   { short: 'VU',     name: 'Vrije Universiteit Amsterdam',        type: 'WO', city: 'Amsterdam' },
  'wur.nl':                  { short: 'WUR',    name: 'Wageningen University & Research',    type: 'WO', city: 'Wageningen' },
  'ou.nl':                   { short: 'OU',     name: 'Open Universiteit',                   type: 'WO', city: 'Heerlen' },
  'leidenuniv.nl':           { short: 'UL',     name: 'Universiteit Leiden',                 type: 'WO', city: 'Leiden' },

  // HBO — Hogescholen
  'avans.nl':                { short: 'Avans',         name: 'Avans Hogeschool',                       type: 'HBO', city: 'Breda' },
  'han.nl':                  { short: 'HAN',           name: 'Hogeschool van Arnhem en Nijmegen',      type: 'HBO', city: 'Arnhem' },
  'hanze.nl':                { short: 'Hanze',         name: 'Hanzehogeschool Groningen',              type: 'HBO', city: 'Groningen' },
  'hu.nl':                   { short: 'HU',            name: 'Hogeschool Utrecht',                     type: 'HBO', city: 'Utrecht' },
  'hva.nl':                  { short: 'HvA',           name: 'Hogeschool van Amsterdam',               type: 'HBO', city: 'Amsterdam' },
  'fontys.nl':               { short: 'Fontys',        name: 'Fontys Hogescholen',                     type: 'HBO', city: 'Eindhoven' },
  'saxion.nl':               { short: 'Saxion',        name: 'Hogeschool Saxion',                      type: 'HBO', city: 'Enschede' },
  'nhlstenden.com':          { short: 'NHL Stenden',   name: 'NHL Stenden Hogeschool',                 type: 'HBO', city: 'Leeuwarden' },
  'hr.nl':                   { short: 'HR',            name: 'Hogeschool Rotterdam',                   type: 'HBO', city: 'Rotterdam' },
  'windesheim.nl':           { short: 'Windesheim',    name: 'Hogeschool Windesheim',                  type: 'HBO', city: 'Zwolle' },
  'hhs.nl':                  { short: 'HHS',           name: 'De Haagse Hogeschool',                   type: 'HBO', city: 'Den Haag' },

  // MBO — ROC's
  'rocva.nl':                { short: 'ROCvA',         name: 'ROC van Amsterdam - Flevoland',          type: 'MBO', city: 'Amsterdam' },
  'rocmn.nl':                { short: 'ROC MN',        name: 'ROC Midden Nederland',                   type: 'MBO', city: 'Utrecht' },

  // UMC — Universitair Medisch Centra
  'amsterdamumc.nl':         { short: 'Amsterdam UMC', name: 'Amsterdam UMC',                          type: 'UMC', city: 'Amsterdam' },
  'erasmusmc.nl':            { short: 'Erasmus MC',    name: 'Erasmus MC',                             type: 'UMC', city: 'Rotterdam' },
  'umcg.nl':                 { short: 'UMCG',          name: 'UMC Groningen',                          type: 'UMC', city: 'Groningen' },
};

export function getInstitution(domain: string): InstitutionInfo {
  if (INSTITUTION_MAP[domain]) return INSTITUTION_MAP[domain];

  // Fallback for unknown domains
  const name = domain.replace(/\.(nl|com|edu|org|net)$/, '');
  const short = name.charAt(0).toUpperCase() + name.slice(1);
  return { short, name: domain, type: 'Overig' };
}
