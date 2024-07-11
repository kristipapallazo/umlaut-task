import { CSSProperties, FC } from "react";
import classes from "./ItemLabel.module.css";

interface ItemLabelProps {
  label?: string;
  item?: string;
  style?: CSSProperties;
  color?: boolean;
}
const ItemLabel: FC<ItemLabelProps> = ({
  item,
  color = true,
  label = "Error",
  style,
}) => {
  return (
    <div
      className={`${classes.cont} ${label === "Error" ? classes.error : ""}`}
      style={{ ...style }}
    >
      <span className={classes.label}>{label}:</span>
      <span className={color ? classes.color : ""}>{item || "undefined"}</span>
    </div>
  );
};

export default ItemLabel;
