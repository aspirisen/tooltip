import React from "react";
import cn from "../styles/Demo.module.css";
import { Buttons } from "./Buttons";
import { Images } from "./Images";

export const Demo = () => {
  return (
    <div>
      <div className={cn.wrapper}>
        <Buttons />
        <Images />
      </div>
      {new Array(50).fill(0).map(() => (
        <div>
          {new Array(100).fill(0).map(() => (
            <span>Space</span>
          ))}
        </div>
      ))}
    </div>
  );
};
