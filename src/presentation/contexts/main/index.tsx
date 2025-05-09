import React, { createContext, useContext, useState } from 'react';
import {
  ISetupContext,
  Props
} from "./types"


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
 
export const useMain = () => {
  return {
    ...useSetup(),
  };
};
 
export const MainProvider: React.FC<Props> = ({ children }: Props) => {
  return (
    <SetupProvider>
      {children}
    </SetupProvider>
  );
};
