import { SYMBOL_DICT } from "../globals";
import { Name } from "../types";

export function handleUmlautConvertion(name: Name): Name {
  for (const { original, umlaut } of SYMBOL_DICT) {
    // loop the proccess for every original characters
    while (name.includes(original)) {
      // do the while block till there is no original in the name after each replacement
      name = name.replace(original, umlaut);
    }
  }

  return name;
}
