import { IButton } from "@/types/interface/Button";

enum Btn {
  default = "btn-default",
  outlined = "btn-outlined",
  text = "btn-text",
}

export default function Button({
  variant = "default",
  title,
  height,
  width,
  icon
}: IButton) {
  const hasIcon = Boolean(icon)
  return (
    <div className={`btn-base ${Btn[variant]} ${height} ${width}`}>
      <span className={`${hasIcon ? '' : 'hidden'}`}>{icon}</span>
      <span className="">{title}</span>
    </div>
  );
}
