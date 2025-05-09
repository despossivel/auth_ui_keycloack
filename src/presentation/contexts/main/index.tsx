import React, { ReactNode, createContext, useContext, useState, useCallback } from 'react';
import {
  ISetupContext,
  Props
} from "./types"
// Define individual interfaces for each state group



const SetupContext = createContext<ISetupContext>({} as ISetupContext);




export const SetupProvider: React.FC<Props> = ({ children }: Props) => {
  const [setup, setSetup] = useState<string>('');

  return (
    <SetupContext.Provider value={{ setup, setSetup }}>
      {children}
    </SetupContext.Provider>
  );
};


export const useSetup = (): ISetupContext => useContext(SetupContext);

// Aggregated useMain hook
export const useMain = () => {
  return {
    ...useSetup(),
  };
};

// MainProvider that composes all individual providers
export const MainProvider: React.FC<Props> = ({ children }: Props) => {
  return (
    <SetupProvider>
      {children}
    </SetupProvider>
  );
};
