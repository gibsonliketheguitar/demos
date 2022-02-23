import { BtnVariant } from "./TButton";

export interface IButton {
  disabled?: boolean;
  width?: string;
  height?: string;
  icon?: JSX.Element;
  title: string;
  variant?: BtnVariant;
  onClick?: () => void;
}
