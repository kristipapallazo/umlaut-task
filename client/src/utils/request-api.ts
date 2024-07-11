import { ServerResp } from "../types/types";

const baseUrl: string = "http://localhost:8080";

export const handlePostReq = async <D = any>(
  route: string,
  options?: RequestInit
): Promise<ServerResp<D>> => {
  try {
    const url = baseUrl + route;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      ...options,
    });
    if (!res) throw new Error("res does not exist");
    const data = await res.json();
    if (!data) throw new Error("data does not exist");
    if (data.error) throw new Error(data.message);
    return data as ServerResp<D>;
  } catch (error) {
    const e = error as Error;
    console.log("e :>> ", e);
    return { error: true, message: e.message } as ServerResp<D>;
  }
};
