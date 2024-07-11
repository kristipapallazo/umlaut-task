import { FC, useEffect, useState } from "react";
import useMainCtx from "../../../../../hooks/main-ctx-service";
import { handlePostReq } from "../../../../../utils/request-api";
import { ServerResp } from "../../../../../types/types";
import ItemLabel from "../../../../UI/ItemLabel/ItemLabel";

interface Data {
  query: string;
}

const QueryGeneration: FC = () => {
  const ctx = useMainCtx();
  const name = ctx.inputVal;
  const [error, setError] = useState<string | undefined>(undefined);

  const [query, setQuery] = useState<string | undefined>(undefined);

  const init = async () => {
    const serverResp: ServerResp<Data> = await handlePostReq(
      "/generate/sql-query",
      {
        body: JSON.stringify({ name }),
      }
    );
    if (serverResp.error) setError(serverResp.message);
    setQuery(serverResp.data?.query);
  };

  useEffect(() => {
    if (name || name !== "") init();
  }, [name]);

  return (
    <div>
      <ItemLabel label="Query" item={query} />
      {error && <ItemLabel label="Error" item={error} />}
    </div>
  );
};

export default QueryGeneration;
