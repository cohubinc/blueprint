import React from "react";

export interface ISpaceProps {
  height?: number | string;
  width?: number | string;
  unit?: string;
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
