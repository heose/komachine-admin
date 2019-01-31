import { normalize, schema } from 'normalizr';

export const normalizeCompanies = data => {
  const logo = new schema.Entity('logo');
  const company = new schema.Entity('company', { logo: [logo] });
  return normalize({ company: data.results }, { company: [company] });
};
