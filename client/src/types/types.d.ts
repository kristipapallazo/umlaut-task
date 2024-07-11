import { SetStateAction } from "react";

type Module = "home" | "item-info" | "all-items";
type SubModule = "umlaut-conversion" | "variations" | "query-generation";

type setStateFn<D> = React.Dispatch<SetStateAction<D>>;

interface ServerResp<D = any> {
  error?: boolean;
  message?: string;
  data?: D;
}

type Name = string;
type Names = Name[];
type Variations = Name[];

type Result = {
  umlautConversion?: Name;
  variations?: Variations;
  sqlQuery?: string;
};
type Results = {
  [name: string]: Result;
};
