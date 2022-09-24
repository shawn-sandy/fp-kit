import * as React from "react";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * The type of the badge.
   * @default none
   * @type "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark"
   **/
}

const Badge = ({} : BadgeProps) => {
  return <span>Badge</span>;
}

export default Badge;
