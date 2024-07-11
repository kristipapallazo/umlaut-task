import { handleFetch } from ".";
import {
  ConvertData,
  GenerateQueryData,
  GenerateVariationsData,
  Name,
  Names,
  Result,
  Results,
} from "../types";

const getAllInfo = async (name: Name): Promise<Result> => {
  const umlautConvertion = await handleFetch<ConvertData>("/convert", name);
  const variations = await handleFetch<GenerateVariationsData>(
    "/generate/variations",
    name
  );
  const sqlQuery = await handleFetch<GenerateQueryData>(
    "/generate/sql-query",
    name
  );

  const result: Result = {
    umlautConvertion: umlautConvertion?.converted,
    variations: variations?.variations,
    sqlQuery: sqlQuery?.query,
  };
  return result;
};

export const handleAllItemsGeneration = async (
  names: Names
): Promise<Results> => {
  const results: Results = {};

  for (const name of names) {
    if (name || name.length > 0) {
      const result = await getAllInfo(name);
      results[name] = result;
    }
  }
  // names.forEach(async (name) => {
  //   if (name || name.length > 0) {
  //     const result = await getAllInfo(name);
  //     results[name] = result;
  //   }
  // });
  return results;
};
