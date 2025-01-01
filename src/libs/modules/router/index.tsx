import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import { schoolAction, schoolLoader, singleSchoolLoader } from '@/services/school';
import { queryClient } from '@mod/query';

const RootScreen = lazy(() => import('@scr/root'));
const ErrorPage = lazy(() => import('@scr/error'));
const LandingScreen = lazy(() => import('@scr/landing'));

const AllSchools = lazy(() => import('@scr/all-schools'));
const CreateSchoolScreen = lazy(() => import('@scr/create-school'));
const SingleSchoolScreen = lazy(() => import('@scr/single-school'));


export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootScreen />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <LandingScreen />,
			},
			{
				path: 'school',
				children: [
					{
						path: '',
						element: <AllSchools />,
						loader: schoolLoader(queryClient),
						errorElement: <ErrorPage />,
					},
					{
						path: 'new',
						element: <CreateSchoolScreen />,
						action: schoolAction(queryClient),
						errorElement: <ErrorPage />,
					},
					{
						path: ':schoolId',
						element: <SingleSchoolScreen />,
						loader: singleSchoolLoader(queryClient),
						errorElement: <ErrorPage />,
					},
				],
			},
		],
	},
]);