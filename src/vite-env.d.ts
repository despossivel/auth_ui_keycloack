/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_KEYCLOAK_URL: string;
  readonly VITE_KEYCLOAK_REALM: string;
  readonly VITE_KEYCLOAK_CLIENTID: string;
  readonly VITE_HOST_RECOGNITION: string;
  readonly VITE_HOST_SETUP: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
