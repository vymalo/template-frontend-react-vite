/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVICE_NAME: string;
  readonly VITE_BACKEND_URL: string;
  readonly VITE_SERVICE_VERSION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
