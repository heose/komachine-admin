import { normalize, schema } from 'normalizr';

export const normalizeCompanies = data => {
  const company = new schema.Entity('companies');
  return normalize({ companies: data.results }, { companies: [company] });
};
