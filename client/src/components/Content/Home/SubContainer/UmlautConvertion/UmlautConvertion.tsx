import { FC, useEffect, useState } from "react";
import useMainCtx from "../../../../../hooks/main-ctx-service";
import { handlePostReq } from "../../../../../utils/request-api";
import { ServerResp } from "../../../../../types/types";
import ItemLabel from "../../../../UI/ItemLabel/ItemLabel";

interface Data {
  converted: string;
}

const UmlautConvertion: FC = () => {
  const ctx = useMainCtx();
  const name = ctx.inputVal;
  const [error, setError] = useState<string | undefined>(undefined);

  const [converted, setConverted] = useState<string | undefined>(undefined);

  const init = async () => {
    const serverResp: ServerResp<Data> = await handlePostReq("/convert", {
      body: JSON.stringify({ name }),
    });
    if (serverResp.error) setError(serverResp.message);
    setConverted(serverResp.data?.converted);
  };

  useEffect(() => {
    if (name || name !== "") init();
  }, [name]);

  return (
    <div>
      <ItemLabel label="Convertion" item={converted} />
      {error && <ItemLabel label="Error" item={error} />}
    </div>
  );
};

export default UmlautConvertion;
