import { Tabs } from "antd";
import { FC } from "react";
import { setStateFn, SubModule } from "../../../../types/types";

const items = [
  {
    label: "Umlaut convertion",
    key: "umlaut-conversion",
  },
  {
    label: "Variations",
    key: "variations",
  },
  {
    label: "Query generation",
    key: "query-generation",
  },
];

interface TabContainerProps {
  subModule: SubModule;
  setSubModule: setStateFn<SubModule>;
}
const TabContainer: FC<TabContainerProps> = ({ subModule, setSubModule }) => {
  const onChange = (activeKey: string) => {
    const val = activeKey as SubModule;
    setSubModule(val);
  };

  return (
    <div>
      <Tabs
        defaultActiveKey={subModule}
        size="middle"
        style={{ flexShrink: 1 }}
        items={items}
        onChange={onChange}
      />
    </div>
  );
};

export default TabContainer;
