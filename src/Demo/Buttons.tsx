import React from "react";
import cn from "../styles/Demo.module.css";
import { Tooltip } from "../components/Tooltip";

export const Buttons = () => {
  const top = React.createRef<HTMLButtonElement>();
  const right = React.createRef<HTMLButtonElement>();
  const bottom = React.createRef<HTMLButtonElement>();
  const left = React.createRef<HTMLButtonElement>();

  return (
    <div>
      <div className={cn.item}>
        <button ref={top}>Top</button>
        <Tooltip placement="top" target={top}>
          Top content
        </Tooltip>
      </div>

      <div className={cn.item}>
        <button ref={right}>Right</button>
        <Tooltip placement="right" target={right}>
          Right content
        </Tooltip>
      </div>

      <div className={cn.item}>
        <button ref={bottom}>Bottom</button>
        <Tooltip placement="bottom" target={bottom}>
          Bottom content
        </Tooltip>
      </div>

      <div className={cn.item}>
        <button ref={left}>Left</button>
        <Tooltip placement="left" target={left}>
          Left content
        </Tooltip>
      </div>
    </div>
  );
};
