import { QueryClient } from '@tanstack/react-query';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { del, get, set } from 'idb-keyval';
import { baseStore } from '@mod/storage';
import { client } from '@openapi/requests';
import { getProjectEnvVariables } from '@mod/env';

const { envVariables } = getProjectEnvVariables();

client.setConfig({
	baseUrl: envVariables.VITE_BACKEND_URL,
	throwOnError: true, // If you want to handle errors on `onError` callback of `useQuery` and `useMutation`, set this to `true`
});

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			gcTime: 1000 * 60 * 60 * 24 * 30, // 30 days
			retry: 3,
		},
	},
});

export const store = baseStore('queries');

export const asyncStoragePersister = createAsyncStoragePersister({
	storage: {
		getItem: (key) => get(key, store),
		setItem: (key, value) => set(key, value, store),
		removeItem: (key) => del(key, store),
	},
	key: 'sma',
});