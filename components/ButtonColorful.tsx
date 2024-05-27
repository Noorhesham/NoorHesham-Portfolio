import { ReactNode } from "react";
import ButtonSvg from "./ButtonSvg";
const Button = ({
  className,text,
  href,
  onClick,
  children,
  px,disabled,
  white=false,
}: {
  className?: string;text?:string,disabled?:boolean
  href?: string;
  onClick?: () => void;
  children?: ReactNode;
  px?: string;
  white?: boolean;
}) => {
  const classes = `button disabled:opacity-70  disabled:cursor-not-allowed   relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  }
  ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
  const spanClasses = "relative flex items-center gap-2 z-10";
  const renderButton = () => (
    <button disabled={disabled} onClick={onClick} className={classes}>
      <span className={spanClasses}>{children}{text}</span>
      {ButtonSvg(white)}
    </button>
  );
  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );
  return href ? renderLink() : renderButton();
};

export default Button;
