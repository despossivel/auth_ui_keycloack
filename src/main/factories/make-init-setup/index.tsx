import React, {  useEffect } from 'react';
import { useKeycloak } from '@react-keycloak/web';
import { useMain } from '@/presentation/contexts';
import {
  Hello,
  Loading
} from "@/presentation/components"

export const MakeInitSetup: React.FC = () => {
  const {
    loader,
    setLoader,
  }: any = useMain();


  const { keycloak, initialized } = useKeycloak();

  useEffect(() => {
    if (keycloak && initialized) {
      if (keycloak.authenticated) {
        setLoader(false);
      } else {
        keycloak.login();
      }
    }
  }, [keycloak, initialized, setLoader]);


  if (loader) return <Loading />;


  return <Hello />
};
