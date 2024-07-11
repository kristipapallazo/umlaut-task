import { FC, ReactNode, useCallback } from "react";
import classes from "./Content.module.css";
import { Module } from "../../types/types";
import Home from "./Home/Home";
import AllItems from "./AllItems/AllItems";
import useMainCtx from "../../hooks/main-ctx-service";

interface ContentProps {
  module: Module;
}

const Content: FC<ContentProps> = ({ module }) => {
  const ctx = useMainCtx();
  const names = ctx.names;

  const handleView = useCallback((): ReactNode => {
    switch (module) {
      case "home":
        return <Home />;
      case "item-info":
        return <AllItems names={[ctx.inputVal]} />;
      case "all-items":
        return <AllItems names={names} />;

      default:
        alert("Module not supported, derived to default module(Home)");
        return <Home />;
    }
  }, [module]);

  return <div className={classes.content}>{handleView()}</div>;
};

export default Content;
