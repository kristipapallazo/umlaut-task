import { NameConversion, Names } from "../types";

export const NAMES: Names = [
  "KOESTNER",
  "RUESSWURM",
  "DUERMUELLER",
  "JAEAESKELAEINEN",
  "GROSSSCHAEDL",
];

export const SYMBOL_DICT: NameConversion[] = [
  { original: "AE", umlaut: "Ä" },
  { original: "OE", umlaut: "Ö" },
  { original: "UE", umlaut: "Ü" },
  { original: "SS", umlaut: "ß" },
];
