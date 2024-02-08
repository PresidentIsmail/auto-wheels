import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center xl:text-base tracking-wide whitespace-nowrap rounded-full text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-brand/90 text-white border border-brand hover:bg-[#f53a33]",
        secondary:
          "bg-[#146ef5] text-white hover:bg-[#0055d4] focus-visible:ring-[#0055d4] focus-visible:ring-offset-white",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-grayBorder bg-transparent hover:bg-accent hover:text-accent-foreground focus-visible:ring-grayBorder focus-visible:ring-offset-white",
        whatsappPrimary:
          "border border-[#4ae168] ring-offset-background bg-[#09b43a] hover:bg-[#26cd4d] text-white hover:text-white focus-visible:ring-[#21be5c] hover:border-[#4ae168]",
        whatsappSecondary:
          "border-[#21be5c] bg-[#111b21] hover:bg-[#111b21]/90 text-white hover:text-white focus-visible:ring-[#21be5c] focus-visible:ring-offset-black border hover:bg-[#21be5c]/40",
        ghost:
          "hover:bg-accent hover:text-accent-foreground focus-visible:ring-white focus-visible:ring-offset-0 focus-visible:ring-1",
        link: "text-white/70 underline-offset-4 hover:underline hover:text-white focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:text-white focus-visible:outline-none focus-visible:underline",
      },
      size: {
        default: "px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
