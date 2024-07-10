import { SYMBOL_DICT } from "../globals";
import { Name, Variations } from "../types";

export function generateVariations(name: Name): Variations {
  const variations: Variations = [name];

  function getAllVariations(currentName: string, startIndex: number): void {
    for (const { original, umlaut } of SYMBOL_DICT) {
      let index = currentName.indexOf(original, startIndex);
      while (index !== -1) {
        const newName =
          currentName.slice(0, index) +
          umlaut +
          currentName.slice(index + original.length);
        variations.push(newName);
        getAllVariations(newName, index + 1);
        index = currentName.indexOf(original, index + 1);
      }
    }
  }

  getAllVariations(name, 0);

  // there might be some duplicates in variations arr, remove them
  const uniqueVariations: Variations = [...new Set(variations)];

  return uniqueVariations;
}
export function generateSQLQuery(name: Name): string {
  const variations: string[] = generateVariations(name);
  const sqlQuery: string = `SELECT * FROM tbl_phonebook WHERE last_name IN (${variations
    .map((v) => `'${v}'`)
    .join(", ")})`;
  return sqlQuery;
}
