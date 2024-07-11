import { Server, ServerResponse } from "http";
import { Name, ServerResp } from "../types";
import config from "config";

const baseUrl = config.get("app.baseUrl");
if (!baseUrl) {
  console.log(`Error: BaseUrl is missing => ${baseUrl}`);
  process.exit(1);
}

export const handleFetch = async <D>(
  route: string,
  name: Name
): Promise<D | undefined> => {
  const url = baseUrl + route;
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });
    if (!res) throw new Error("Error occured while fetching!");
    const data: ServerResp = await res.json();
    if (!data)
      throw new Error("Error occured while fetching, data does not exist!");
    if (data.error) throw new Error(data.message);
    return data.data;
  } catch (error) {
    const e = error as Error;
    console.log("e :>> ", e);
    return undefined;
  }
};
