import '@mod/tracing';
import "@fontsource/roboto/400.css";
import './index.scss';

import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { router } from '@mod/router';
import Notification from '@mod/notification';
import Versioning from '@mod/versioning';
import QueryWrapper from '@mod/query';

const container = document.getElementById('root')!;
createRoot(container).render(
	<StrictMode>
		<QueryWrapper>
			<Versioning />
			<RouterProvider router={router} />
			<Notification />
		</QueryWrapper>
	</StrictMode>,
);