import { TVariant } from "../type/Button";

export interface IButton {
  disabled?: boolean,
  width?: string,
  height?: string,
  icon?: JSX.Element,
  title: string,
  variant?: TVariant,
}
