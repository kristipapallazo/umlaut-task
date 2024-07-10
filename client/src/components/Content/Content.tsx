import { FC, ReactNode, useCallback } from "react";
import classes from "./Content.module.css";
import { Module } from "../../types/types";
import Home from "./Home/Home";

interface ContentProps {
  module: Module;
}

const Content: FC<ContentProps> = ({ module }) => {
  const handleView = useCallback((): ReactNode => {
    switch (module) {
      case "home":
        return <Home />;
      case "item-info":
        return <Home />;
      case "all-items":
        return <Home />;

      default:
        alert("Module not supported, derived to default module(Home)");
        return <Home />;
    }
  }, [module]);

  return <div className={classes.content}>{handleView()}</div>;
};

export default Content;
