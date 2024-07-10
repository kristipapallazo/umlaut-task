import { SetStateAction } from "react";

type Module = "home" | "item-info" | "all-items";
type SubModule = "umlaut-conversion" | "variations" | "query-generation";

type setStateFn<D> = React.Dispatch<SetStateAction<D>>;
