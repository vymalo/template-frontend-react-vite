import { LoaderFunctionArgs } from 'react-router-dom';
import { QueryClient } from '@tanstack/react-query';

export function rootLoader(qc: QueryClient): (args: LoaderFunctionArgs<any>, handlerCtx?: any) => Promise<any> {
	return async () => {
		qc.clear();
		return null;
	};
}