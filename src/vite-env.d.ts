/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_SERVICE_NAME: string;
	readonly VITE_BACKEND_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}