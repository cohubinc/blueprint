import React, { CSSProperties } from "react";

type ElevationLevel = 0 | 1 | 2 | 3 | 8 | 16 | 24 | string;

enum BoxShadow {
  dp0 = "",
  dp1 = "0px -1px 1px rgba(0, 0, 0, 0.03), 0px 1px 1px rgba(0, 0, 0, 0.14)",
  dp2 = "0px 1px 2px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12)",
  dp3 = "0px 1px 8px rgba(0, 0, 0, 0.12), 0px 3px 4px rgba(0, 0, 0, 0.14)",
  dp8 = "0px 5px 5px rgba(0, 0, 0, 0.1), 0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12)",
  dp16 = "0px 8px 10px rgba(0, 0, 0, 0.2), 0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12)",
  dp24 = "0px 11px 15px rgba(0, 0, 0, 0.2), 0px 9px 46px rgba(0, 0, 0, 0.12), 0px 24px 38px rgba(0, 0, 0, 0.14)",
  dpPrimary = "0px 15px 30px rgba(67, 72, 87, 0.1)",
}

export interface ISegmentProps {
  children: any;
  backgroundColor: string;
  className?: string;
  style?: CSSProperties;
  padding?: number;
  elevation?: ElevationLevel;
  /**
   * If true, the Segment will show a border
   */
  bordered?: boolean;
  borderColor?: string;
  fullWidth?: boolean;
}

export default function Segment(props: ISegmentProps) {
  const {
    children,
    backgroundColor,
    className,
    style,
    padding = 2,
    bordered,
    borderColor,
    elevation = 0,
    fullWidth = true,
  } = props;

  const dpLevel: any = bordered ? "dp0" : `dp${elevation}`;

  return (
    <div
      className={className}
      style={{
        padding: `${padding}rem`,
        boxShadow: (BoxShadow as any)[dpLevel as any],
        border: bordered ? borderColor : "",
        backgroundColor: backgroundColor,
        borderRadius: "10px",
        width: fullWidth ? "100%" : "inherit",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
