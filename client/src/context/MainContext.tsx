import { createContext, FC, ReactNode, useState } from "react";
import { Names, setStateFn } from "../types/types";
import { NAMES } from "../globals";

interface MainContextProps {
  children: ReactNode;
}

export interface InitialState {
  inputVal: string;
  setInputVal: setStateFn<string>;
  selectVal: string;
  setSelectVal: setStateFn<string>;
  names: Names;
}
const initialState: InitialState = {
  inputVal: "",
  setInputVal: () => {},
  selectVal: "",
  setSelectVal: () => {},
  names: [],
};
export const MainCtx = createContext(initialState);

const MainContextProvider: FC<MainContextProps> = ({ children }) => {
  const [inputVal, setInputVal] = useState<string>("");
  const [selectVal, setSelectVal] = useState<string>("");

  const ctxVal: InitialState = {
    inputVal,
    setInputVal,
    selectVal,
    setSelectVal,
    names: NAMES,
  };

  return <MainCtx.Provider value={ctxVal}>{children}</MainCtx.Provider>;
};

export default MainContextProvider;
