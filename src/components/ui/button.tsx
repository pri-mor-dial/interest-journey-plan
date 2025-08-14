import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-travel-green-hover rounded-[--radius-button] shadow-soft hover:shadow-medium",
        hero: "bg-gradient-to-r from-terracotta to-accent-light text-white rounded-[--radius-button] shadow-medium hover:shadow-strong hover:scale-105 font-semibold",
        search: "bg-travel-green text-white hover:bg-travel-green-hover rounded-[--radius-button] shadow-soft hover:shadow-medium font-semibold",
        ghost: "hover:bg-neutral-100 hover:text-neutral-900 rounded-[--radius-button]",
        outline: "border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700 rounded-[--radius-button] shadow-soft",
        secondary: "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 rounded-[--radius-button]",
        link: "text-travel-green underline-offset-4 hover:underline font-medium",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-[--radius-button]",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-base",
        xl: "h-16 px-10 py-5 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
