/// <reference types="vite/client" />
interface ImportMeta {
	Env: ImportMetaEnv
}

interface ImportMetaEnv {
	VITE_SERVER_URL: string
}
