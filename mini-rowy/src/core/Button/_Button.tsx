import { IButton } from "./IButton";

enum Btn {
  default = "btn-default",
  outlined = "btn-outlined",
  text = "btn-text",
}

export default function Button({
  disabled = false,
  variant = "default",
  title,
  height,
  width,
  icon,
  onClick,
}: IButton) {
  const hasIcon = Boolean(icon);
  const handleOnClick = (e: any) => {
    e.preventDefault();
    if (disabled) return;
    console.log("firing");
    onClick?.();
  };

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
