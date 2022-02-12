import equal from "fast-deep-equal";
import React, { useRef } from "react";
import {
  compareMemoProps,
  logMemoProps,
  reRenderNotEqual,
} from "src/utils/testHelpers/logMemoProps";
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

  function handleOnClick(e: any) {
    if (disabled) return null;
    e.preventDefault();
    onClick?.();
  }

  return (
    <div
      className={`btn-base ${Btn[variant]} ${height} ${width}`}
      onClick={(e) => handleOnClick(e)}
    >
      <span className={`${hasIcon ? "" : "hidden"}`}>{icon}</span>
      <span>{title}</span>
    </div>
  );
}

export default React.memo(Button);
