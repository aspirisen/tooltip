import React from "react";
import cn from "../styles/Demo.module.css";
import { Tooltip } from "../components/Tooltip";

export const Buttons = () => {
  return (
    <div>
      <div className={cn.item}>
        <Tooltip<HTMLButtonElement> placement="top" content="Top content">
          {ref => <button ref={ref}>Top</button>}
        </Tooltip>
      </div>

      <div className={cn.item}>
        <Tooltip<HTMLButtonElement> placement="right" content="Right content">
          {ref => <button ref={ref}>Right</button>}
        </Tooltip>
      </div>

      <div className={cn.item}>
        <Tooltip<HTMLButtonElement> placement="bottom" content="Bottom content">
          {ref => <button ref={ref}>Bottom</button>}
        </Tooltip>
      </div>

      <div className={cn.item}>
        <Tooltip<HTMLButtonElement> placement="left" content="Left content">
          {ref => <button ref={ref}>Left</button>}
        </Tooltip>
      </div>
    </div>
  );
};
