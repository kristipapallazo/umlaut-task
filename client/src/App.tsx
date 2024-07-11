import { useState } from "react";
import classes from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import { Module } from "./types/types";
import MainContextProvider from "./context/MainContext";
import { ConfigProvider } from "antd";

function App() {
  const [module, setModule] = useState<Module>("home");

  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            itemColor: "white",
          },
        },
      }}
    >
      <MainContextProvider>
        <div className={classes.app}>
          <Navbar module={module} setModule={setModule} />
          <Content module={module} />
        </div>
      </MainContextProvider>
    </ConfigProvider>
  );
}

export default App;
