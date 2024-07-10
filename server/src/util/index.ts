import { Name } from "../types";
import config from "config";

const baseUrl = config.get("app.baseUrl");
if (!baseUrl) {
  console.log(`Error: BaseUrl is missing => ${baseUrl}`);
  process.exit(1);
}

export const handleFetch = async (route: string, name: Name) => {
  const url = baseUrl + route;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    if (!res || res.ok) throw new Error("Error occured while fetching!");
    const data = await res.json();
    if (!data)
      throw new Error("Error occured while fetching, data does not exist!");
    if (data.error) throw new Error(data.message);
  } catch (error) {
    const e = error as Error;
    console.log("e :>> ", e);
    return undefined;
  }
};
