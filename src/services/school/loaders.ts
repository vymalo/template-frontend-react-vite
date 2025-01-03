import {
  prefetchUseGetSchools,
  prefetchUseGetSingleSchool,
} from '@openapi/queries/prefetch.ts';
import { QueryClient } from '@tanstack/react-query';
import { LoaderFunctionArgs } from 'react-router-dom';

export function schoolLoader(
  qc: QueryClient,
): (args: LoaderFunctionArgs<any>, handlerCtx?: any) => Promise<any> {
  return async () => {
    await prefetchUseGetSchools(qc);
  };
}

export function singleSchoolLoader(
  qc: QueryClient,
): (args: LoaderFunctionArgs<any>, handlerCtx?: any) => Promise<any> {
  return async (args) => {
    if (!args.params.schoolId) {
      return null;
    }

    await prefetchUseGetSingleSchool(qc, {
      path: {
        id: args.params.schoolId,
      },
    });
  };
}
