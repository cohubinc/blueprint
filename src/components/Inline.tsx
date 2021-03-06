import React, { ReactNode, CSSProperties } from "react";

export interface IInlineProps {
  children: ReactNode[] | ReactNode;
  space?: number;
  alignment?: "center" | "left" | "right";
  itemAlignment?: "start" | "end" | "center" | "baseline" | "stretch";
  style?: CSSProperties;
}

export default function Inline({
  space = 1,
  children,
  alignment = "left",
  itemAlignment = "center",
  style,
}: IInlineProps) {
  const calculateMargin = () => {
    switch (alignment) {
      case "center":
        return {
          marginLeft: `${space / 2}rem`,
          marginRight: `${space / 2}rem`,
        };
      case "left":
        return {
          marginRight: `${space}rem`,
        };
      case "right":
        return {
          marginLeft: `${space}rem`,
        };
      default:
        return {
          marginRight: `${space}rem`,
        };
    }
  };

  const calculateAlignment = () => {
    switch (alignment) {
      case "center":
        return { justifyContent: "center" };
      case "left":
        return { justifyContent: "flex-start" };
      case "right":
        return { justifyContent: "flex-end" };
      default:
        return { justifyContent: "flex-start" };
    }
  };

  const calculateItemAlignment = () => {
    switch (itemAlignment) {
      case "center":
        return { alignItems: "center" };
      case "baseline":
        return { alignItems: "baseline" };
      case "start":
        return { alignItems: "flex-start" };
      case "end":
        return { alignItems: "flex-end" };
      case "stretch":
        return { alignItems: "stretch" };
      default:
        return { alignItems: "center" };
    }
  };

  const spacedChildren = () => {
    if (Array.isArray(children)) {
      return children.filter(Boolean).map((c, idx) => {
        return (
          <span key={idx} style={calculateMargin()}>
            {c}
          </span>
        );
      });
    } else {
      return <span style={calculateMargin()}>{children}</span>;
    }
  };

  return (
    <div
      style={{
        ...style,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        ...calculateItemAlignment(),
        ...calculateAlignment(),
      }}
    >
      {spacedChildren()}
    </div>
  );
}
