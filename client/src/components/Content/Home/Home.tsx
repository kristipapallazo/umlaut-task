import classes from "./Home.module.css";
import React, { useEffect, useState } from "react";
import TabContainer from "./TabContainer/TabContainer";
import { SubModule } from "../../../types/types";
import SubContainer from "./SubContainer/SubContainer";
import MainCtxService from "../../../hooks/main-ctx-service";
import SelectComp from "./SelectComp";
import Search, { SearchProps } from "antd/es/input/Search";

const Home = () => {
  const [subModule, setSubModule] = useState<SubModule>("umlaut-conversion");
  const [input, setInput] = useState<string>("");

  const ctx = MainCtxService();
  const { selectVal, names } = ctx;
  // const ref = useRef<InputRef>(null);

  useEffect(() => {
    if (selectVal === "") return;
    setInput(selectVal);
  }, [selectVal]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // ctx.setInputVal(e.target.value);
    setInput(e.target.value.toUpperCase());
  };
  const onSearch: SearchProps["onSearch"] = (value /* _e, info */) => {
    ctx.setInputVal(value);
    if (!names.includes(value)) ctx.setSelectVal("");
  };

  return (
    <div className={classes.home}>
      <h1 className={classes.title}>Umlaut Convertion Site</h1>
      <div className={classes.inputCont}>
        <SelectComp />
        <Search
          placeholder="Type a name"
          value={input}
          onSearch={onSearch}
          defaultValue={input}
          onChange={onChange}
          // ref={ref}
          // style={{ width: "50%" }}
        />
        {/* <button onClick={handleInputValueUpdate} className={classes.btn}>
          Submit
        </button> */}
      </div>
      <div className={classes.info}>
        Select or type a name. Searching on input has more priority than
        selecting!
      </div>
      <TabContainer subModule={subModule} setSubModule={setSubModule} />
      <SubContainer subModule={subModule} />
    </div>
  );
};

export default Home;
