import classNames from "classnames";

import "./StatusDot.css";

interface IStatusDotProps {
  color: string;
  size?: number;
  className?: string;
}

export const StatusDot = ({ color, size = 10, className }: IStatusDotProps) => {
  return (
    <span
      className={classNames("status-dot", className)}
      style={{ backgroundColor: color, height: size, width: size }}
    />
  );
};
