export interface SURFconextConfig {
  issuer: string;
  authorizationEndpoint: string;
  tokenEndpoint: string;
  userinfoEndpoint: string;
  jwksUri: string;
  scopes: string[];
}

const TEST_CONFIG: SURFconextConfig = {
  issuer: 'https://connect.test.surfconext.nl',
  authorizationEndpoint: 'https://connect.test.surfconext.nl/oidc/authorize',
  tokenEndpoint: 'https://connect.test.surfconext.nl/oidc/token',
  userinfoEndpoint: 'https://connect.test.surfconext.nl/oidc/userinfo',
  jwksUri: 'https://connect.test.surfconext.nl/oidc/certs',
  scopes: ['openid', 'profile', 'email', 'eduperson_scoped_affiliation', 'schac_home_organization'],
};

const PROD_CONFIG: SURFconextConfig = {
  issuer: 'https://connect.surfconext.nl',
  authorizationEndpoint: 'https://connect.surfconext.nl/oidc/authorize',
  tokenEndpoint: 'https://connect.surfconext.nl/oidc/token',
  userinfoEndpoint: 'https://connect.surfconext.nl/oidc/userinfo',
  jwksUri: 'https://connect.surfconext.nl/oidc/certs',
  scopes: ['openid', 'profile', 'email', 'eduperson_scoped_affiliation', 'schac_home_organization'],
};

export function getSurfconextConfig(env: 'test' | 'production' = 'test'): SURFconextConfig {
  return env === 'production' ? PROD_CONFIG : TEST_CONFIG;
}
