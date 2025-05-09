import Keycloak from 'keycloak-js';

export const keycloak = new Keycloak({
  clientId: import.meta.env.VITE_KEYCLOAK_CLIENTID,
  realm: import.meta.env.VITE_KEYCLOAK_REALM,
  url: import.meta.env.VITE_KEYCLOAK_URL,
});

export const initOptions = {
  checkLoginIframe: false,
  onload: 'check-sso',
};
