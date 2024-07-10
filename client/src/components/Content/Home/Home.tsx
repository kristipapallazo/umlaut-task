import { Input } from "antd";
import classes from "./Home.module.css";
import React, { useState } from "react";
import TabContainer from "./TabContainer/TabContainer";
import { SubModule } from "../../../types/types";
import SubContainer from "./SubContainer/SubContainer";

const Home = () => {
  const [inputVal, setInputVal] = useState<string>();
  const [subModule, setSubModule] = useState<SubModule>("umlaut-conversion");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputVal(e.target.value);
  };

  return (
    <div className={classes.home}>
      <h1 className={classes.title}>Umlaut Convertion Site</h1>
      <Input placeholder="Type a name" value={inputVal} onChange={onChange} />
      <TabContainer subModule={subModule} setSubModule={setSubModule} />
      <SubContainer subModule={subModule} />
    </div>
  );
};

export default Home;
