import { FC } from "react";
import { Menu, MenuProps } from "antd";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa";
import classes from "./Navbar.module.css";
import { Module, setStateFn } from "../../types/types";

const items = [
  {
    label: "Home",
    key: "home",
    icon: <FaHome />,
  },
  {
    label: "Item info",
    key: "item-info",
    icon: <FaInfoCircle />,
  },
  {
    label: "All items",
    key: "all-items",
    icon: <FaLayerGroup />,
  },
];

interface NavbarProps {
  module: Module;
  setModule: setStateFn<Module>;
}

const Navbar: FC<NavbarProps> = ({ module, setModule }) => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    const val = e.key as Module;
    setModule(val);
  };
  return (
    <div className={classes.nav}>
      <Menu
        onClick={onClick}
        selectedKeys={[module]}
        mode="horizontal"
        items={items}
      />
    </div>
  );
};

export default Navbar;
