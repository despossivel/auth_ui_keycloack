import React from 'react';
import { ReactKeycloakProvider } from '@react-keycloak/web';
import { QueryClient, QueryClientProvider } from 'react-query';

import { initOptions, keycloak } from '@/config';
import {
  MainProvider,
} from '@/presentation/contexts';
import { Router } from './router';
import '@/presentation/i18n/config';



const queryClient = new QueryClient();


type ProviderComponent = (children: React.ReactNode) => JSX.Element;

const providersComponents: ProviderComponent[] = [
  (children) => (
    <ReactKeycloakProvider authClient={keycloak} initOptions={initOptions}>
      {children}
    </ReactKeycloakProvider>
  ),
  (children) => <MainProvider>{children}</MainProvider>,
  (children) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
];

export const Main: React.FC = () => {
  const app: React.ReactNode = <Router />;

  const WithProviders = providersComponents.reduceRight(
    (children, Provider) => Provider(children),
    app,
  );

  return <React.Fragment>{WithProviders}</React.Fragment>;
};

export default Main;
