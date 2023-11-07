const PORT = import.meta.env.VITE_PORT ?? 8000;
export const BASE_URL : string = `http://localhost:${PORT}`;
export const YJS_SOCKET_URL = `ws://localhost:${PORT}/yjs`;