import { handleFetch } from ".";
import { Name, Names, Result, Results } from "../types";

const getAllInfo = async (name: Name): Promise<Result> => {
  const umlautConversion: string | undefined = await handleFetch(
    "/convert",
    name
  );
  const variations: string[] | undefined = await handleFetch(
    "/generate/variations",
    name
  );
  const sqlQuery: string | undefined = await handleFetch(
    "/generate/sql-query",
    name
  );
  // const umlautConversion: string = handleUmlautConvertion(name);
  // const variations: string[] = generateVariations(name);
  // const sqlQuery: string = generateSQLQuery(name);

  const result: Result = { umlautConversion, variations, sqlQuery };
  return result;
};

export const handleAllItemsGeneration = async (
  names: Names
): Promise<Results> => {
  const results: Results = {};

  names.forEach(async (name) => {
    if (name || name.length > 0) {
      results[name] = await getAllInfo(name);
    }
  });
  return results;
};
