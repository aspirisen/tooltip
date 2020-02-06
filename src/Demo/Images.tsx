import React from "react";
import cn from "../styles/Demo.module.css";
import { Tooltip } from "../components/Tooltip";
import icon from "./icon.png";

export const Images = () => {
  const imageTarget = React.createRef<HTMLImageElement>();
  const tooltipImageTarget = React.createRef<HTMLImageElement>();

  return (
    <div>
      <div className={cn.item}>
        <img ref={imageTarget} src={icon} width="40px" />
        <Tooltip placement="right" target={imageTarget}>
          Open images
        </Tooltip>
      </div>

      <div className={cn.item}>
        <span ref={tooltipImageTarget}>Tooltip with image</span>
        <Tooltip placement="bottom" target={tooltipImageTarget}>
          <img src={icon} width="80px" />
        </Tooltip>
      </div>
    </div>
  );
};
