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
  reveal?: boolean;
}

export default function Space({
  height = "inherit",
  width = "inherit",
  unit = "rem",
  reveal = false,
}: ISpaceProps) {
  return (
    <div
      style={{
        backgroundColor: reveal ? "black" : "transparent",
        height: `${height}${unit}`,
        width: `${width}${unit}`,
      }}
    ></div>
  );
}
