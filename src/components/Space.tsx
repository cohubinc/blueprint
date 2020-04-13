import React, { CSSProperties } from "react";

export interface ISpaceProps {
  height?: CSSProperties["height"];
  width?: CSSProperties["width"];
  unit?:
    | "cm"
    | "mm"
    | "in"
    | "px"
    | "pt"
    | "pc"
    | "em"
    | "rem"
    | "ex"
    | "ch"
    | "vw"
    | "vh"
    | "vmin"
    | "vmax"
    | "%";
}

export default function Space({
  height = "inherit",
  width = "inherit",
  unit = "rem",
}: ISpaceProps) {
  return (
    <div
      style={{
        backgroundColor: "transparent",
        height: `${height}${unit}`,
        width: `${width}${unit}`,
      }}
    ></div>
  );
}
