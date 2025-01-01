import { LoaderFunctionArgs } from 'react-router-dom';
import { QueryClient } from '@tanstack/react-query';

export function schoolAction(qc: QueryClient): (args: LoaderFunctionArgs<any>, handlerCtx?: any) => Promise<any> {
	return async () => {
		await qc.invalidateQueries();
	};
}