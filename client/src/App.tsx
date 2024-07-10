import { useState } from "react";
import classes from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";
import { Module } from "./types/types";

// onClick={async () => {
//   try {
//     const res = await fetch("http://localhost:8080/test");
//     console.log("res :>> ", res);
//     if (!res) throw new Error("res does not exist");
//     const data = await res.json();
//     console.log("data :>> ", data);
//     if (!data) throw new Error("data does not exist");
//     setRes(JSON.stringify(data));
//   } catch (error) {
//     const e = error as Error;
//     console.log("e :>> ", e);
//     alert(e.message);
//   }
// }}

function App() {
  const [module, setModule] = useState<Module>("home");

  return (
    <div className={classes.app}>
      <Navbar module={module} setModule={setModule} />
      <Content module={module} />
    </div>
  );
}

export default App;
