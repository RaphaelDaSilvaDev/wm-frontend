export interface ButtonProps {
  text: string;
  type?: "submit" | "button" | "reset";
  loading: boolean;
  onClick?: () => void;
}
