import { FC, useEffect, useState } from "react";
import useMainCtx from "../../../../../hooks/main-ctx-service";
import { handlePostReq } from "../../../../../utils/request-api";
import { ServerResp, Variations } from "../../../../../types/types";
import ItemLabel from "../../../../UI/ItemLabel/ItemLabel";
import classes from "./Variations.module.css";

interface Data {
  variations: Variations;
}

const VariationsComp: FC = () => {
  const ctx = useMainCtx();
  const name = ctx.inputVal;
  const [error, setError] = useState<string | undefined>(undefined);
  const [variations, setVariations] = useState<Variations | undefined>(
    undefined
  );

  const init = async () => {
    const serverResp: ServerResp<Data> = await handlePostReq(
      "/generate/variations",
      {
        body: JSON.stringify({ name }),
      }
    );
    // console.log("serverResp :>> ", serverResp);
    if (serverResp.error) setError(serverResp.message);
    setVariations(serverResp.data?.variations);
  };

  useEffect(() => {
    if (name || name !== "") init();
  }, [name]);

  return (
    <div className={classes.container}>
      {error && <ItemLabel label="Error" item={error} />}
      <div className={classes.varCont}>
        <span className="label">Variations:</span>
        {variations && variations.length > 0 && (
          <ul className={classes.list}>
            {variations.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default VariationsComp;
