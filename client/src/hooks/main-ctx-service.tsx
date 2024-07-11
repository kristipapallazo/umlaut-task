import { useContext } from "react";
import { InitialState, MainCtx } from "../context/MainContext";

const useMainCtx = (): InitialState => {
  const ctx = useContext(MainCtx);
  if (!ctx) {
    alert("Error: Context not found");
    throw new Error("Context not found");
  }

  return ctx;
};

export default useMainCtx;
