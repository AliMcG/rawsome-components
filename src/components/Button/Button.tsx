import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils/cn";

/** The extends type "HTMLButtonElement" allows us to use any attributes that a <button> tag can have
 *  without having to explicitly define the arttibutes
 *  this is done by spreading the prop "...rest"
 * */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

/** Documentation on CVA - https://cva.style/docs/getting-started/variants
 * We can add or modfiy the "intent". For example to have "primary", "secondary" and "danger"
 * We can add or modfiy the "size". For example to have "small", "normal", "large" and "extra large"
 */
const buttonStyles = cva(
  "flex w-full items-center justify-center rounded-lg font-semibold no-underline transition shadow-2xl shadow-slate-800",
  {
    variants: {
      intent: {
        primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover",
       danger: "bg-danger text-danger-text hover:danger-hover"
      },
      size: {
        small: "px-1 py-0.1",
        normal: "px-2 py-1",
        large: "px-5 py-3",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "normal",
    },
  },
);
export interface CombinedButtonProps
  extends ButtonProps,
    VariantProps<typeof buttonStyles> {}

const Button = ({ children, className, intent, size, ...rest }: CombinedButtonProps) => {
  return (
    <button className={cn(buttonStyles({ intent, size, className }))} {...rest}>
      {children}
    </button>
  );
};

export default Button;
