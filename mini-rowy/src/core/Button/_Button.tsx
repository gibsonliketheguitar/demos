import React from "react";
import { IButton } from "./IButton";

enum Btn {
  default = "btn-default",
  outlined = "btn-outlined",
  text = "btn-text",
}

function Button({
  disabled = false,
  variant = "default",
  title,
  height,
  width,
  icon,
  onClick,
}: IButton) {
  const hasIcon = Boolean(icon);

  const handleOnClick = React.useCallback(
    (e: any) => {
      if (disabled) return null;
      e.preventDefault();
      onClick?.();
    },
    [onClick]
  );

  return (
    <div
      className={`btn-base ${Btn[variant]} ${height} ${width}`}
      onClick={handleOnClick}
    >
      <span className={`${hasIcon ? "" : "hidden"}`}>{icon}</span>
      <span>{title}</span>
    </div>
  );
}

export default React.memo(Button);
