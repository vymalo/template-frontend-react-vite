import '@mod/tracing';
import '@fontsource/roboto/400.css';
import './index.scss';

import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { router } from '@mod/router';
import Notification from '@mod/notification';
import Versioning from '@mod/versioning';
import QueryWrapper from '@mod/query';
import { i18nFn } from '@mod/i18n';
import { I18nextProvider } from 'react-i18next';

async function main() {
  const i18n = await i18nFn();

  const container = document.getElementById('root')!;
  createRoot(container).render(
    <StrictMode>
      <I18nextProvider i18n={i18n}>
        <QueryWrapper>
          <Versioning />
          <RouterProvider router={router} />
          <Notification />
        </QueryWrapper>
      </I18nextProvider>
    </StrictMode>,
  );
}

main().catch(console.error);