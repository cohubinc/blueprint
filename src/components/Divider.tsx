import React from "react";

export interface IDividerProps {
  marginSize?: 0.5 | 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  color?: string;
}

export default function Divider({
  marginSize,
  className,
  color = "hsl(0, 0%, 92%)",
}: IDividerProps) {
  const style = {
    borderTop: `1px solid ${color}`,
    marginTop: `${marginSize || 0}rem`,
    marginBottom: `${marginSize || 0}rem`,
    width: "100%",
  };

  return <div className={className} style={style} />;
}
