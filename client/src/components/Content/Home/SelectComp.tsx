import { Select } from "antd";
import { useEffect, useState } from "react";
import { BaseOptionType } from "antd/es/select";
import useMainCtx from "../../../hooks/main-ctx-service";

type Options = BaseOptionType[];

const SelectComp = () => {
  const [options, setOptions] = useState<Options>([]);
  // const [value, setValue] = useState<string>("");
  const ctx = useMainCtx();

  const handleSelectChange = (value: string) => {
    // setValue(value);
    ctx.setSelectVal(value);
    ctx.setInputVal(value);
  };

  useEffect(() => {
    const options = ctx.names.map((name) => ({ value: name, label: name }));
    // setValue(options[0].value);
    // console.log("options[0].value :>> ", options[0].value);
    ctx.setSelectVal(options[0].value);
    ctx.setInputVal(options[0].value);

    setOptions(options);
  }, []);
  return (
    <>
      <Select
        // style={{ width: 120 }}
        defaultActiveFirstOption={true}
        onChange={handleSelectChange}
        options={options}
        value={ctx.selectVal}
      />
    </>
  );
};

export default SelectComp;
