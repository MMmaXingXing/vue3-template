interface Recordable {
  VITE_PORT?: string
  VITE_GLOB_APP_TITLE?: string
  VITE_GLOB_APP_SHORT_NAME?: string
  VITE_USE_MOCK?: string // boolean
  VITE_PUBLIC_PATH?: string
  VITE_PROXY?: string
  VITE_DROP_CONSOLE?: string
  VITE_GLOB_API_URL?: string
  VITE_GLOB_UPLOAD_URL?: string
  VITE_GLOB_API_URL_PREFIX?: string
  [string]: string
}

interface ViteEnv {
  VITE_PORT?: number
  VITE_GLOB_APP_TITLE?: string
  VITE_GLOB_APP_SHORT_NAME?: string
  VITE_USE_MOCK?: boolean // boolean
  VITE_PUBLIC_PATH?: string
  VITE_PROXY?: [string, string][] // '[["/basic-api","http://localhost:3000"],["/upload","http://localhost:3300/upload"]]',
  VITE_DROP_CONSOLE?: boolean // 'false',
  VITE_GLOB_API_URL?: string
  VITE_GLOB_UPLOAD_URL?: string
  VITE_GLOB_API_URL_PREFIX?: string
}

