import React from "react";
import cn from "../styles/Demo.module.css";
import { Tooltip } from "../components/Tooltip";
import icon from "./icon.png";

export const Images = () => {
  return (
    <div>
      <div className={cn.item}>
        <Tooltip<HTMLImageElement> placement="right" content="Open images">
          {ref => <img ref={ref} src={icon} width="40px" />}
        </Tooltip>
      </div>

      <div>
        <Tooltip<HTMLSpanElement>
          placement="bottom"
          content={<img src={icon} width="80px" />}
        >
          {ref => <span ref={ref}>Tooltip with image</span>}
        </Tooltip>
      </div>
    </div>
  );
};
