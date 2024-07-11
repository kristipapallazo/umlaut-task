import { FC, ReactNode, useCallback } from "react";
import { SubModule } from "../../../../types/types";
import UmlautConvertion from "./UmlautConvertion/UmlautConvertion";

import VariationsComp from "./Variations/Variations";
import QueryGeneration from "./QueryGeneration/QueryGeneration";

interface SubContainerProps {
  subModule: SubModule;
}

const SubContainer: FC<SubContainerProps> = ({ subModule }) => {
  const handleView = useCallback((): ReactNode => {
    switch (subModule) {
      case "umlaut-conversion":
        return <UmlautConvertion />;
      case "variations":
        return <VariationsComp />;
      case "query-generation":
        return <QueryGeneration />;

      default:
        alert(
          "Unknown sub module: " +
            subModule +
            ". Derived to default module(variations)"
        );
        break;
    }
  }, [subModule]);

  return <>{handleView()}</>;
};

export default SubContainer;
