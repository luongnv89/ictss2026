/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_SITE_URL: string
  readonly VITE_GA_ID: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
