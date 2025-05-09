

export interface ISetupContext {
  setup: string;
  setSetup: (value: string) => void;
  loader: boolean;
  setLoader: (value: boolean) => void;
}

export interface Props {
  children: ReactNode;
}