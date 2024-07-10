import { FC, ReactNode, useCallback } from "react";
import { SubModule } from "../../../../types/types";

interface SubContainerProps {
  subModule: SubModule;
}
const SubContainer: FC<SubContainerProps> = ({ subModule }) => {
  const handleView = useCallback((): ReactNode => {
    switch (subModule) {
      case "umlaut-conversion":
        return <div>umlaut convertion</div>;
      case "variations":
        return <div>vari</div>;
      case "query-generation":
        return <div>query</div>;

      default:
        alert(
          "Unknown sub module: " +
            subModule +
            ". Derived to default module(variations)"
        );
        break;
    }
  }, [subModule]);

  return <div>{handleView()}</div>;
};

export default SubContainer;
