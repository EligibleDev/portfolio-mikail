import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

const buttonVariants = cva(
    "group gap-1 overflow-hidden rounded-full font-medium capitalize duration-400 hover:-translate-y-0.5 hover:transition-all relative bg-primary-red focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex cursor-pointer shrink-0 items-center justify-center text-md font-rubik whitespace-nowrap transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    {
        variants: {
            variant: {
                default: "",
                outline:
                    "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
                secondary:
                    "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "px-8 py-4",
                md: "h-10 rounded-md px-6 has-[>svg]:px-4",
                sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
                icon: "size-10",
                // TODO: add ripple animation with before that starts from the middle like the inspiration design.
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

function Button({
    className,
    variant = "default",
    size = "default",
    asChild = false,
    children,
    ...props
}: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean;
    }) {
    const Comp = asChild ? Slot : "button";
    const isAnimated =
        (variant === "default" || variant === "secondary" || variant === "outline") &&
        (size === "default" || size === "md");

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        >
            {isAnimated ? (
                <>
                    <ArrowRight className="absolute -left-1/4 z-[9] size-5 transition-all duration-400 group-hover:left-4" />

                    <span className="relative z-[1] -translate-x-3 transition-all duration-400 group-hover:translate-x-3">
                        {children}
                    </span>

                    <ArrowRight className="absolute right-4 z-[9] size-5 w-6 transition-all duration-400 group-hover:-right-1/4" />
                </>
            ) : (
                <>{children}</>
            )}
        </Comp>
    );
}

export { Button, buttonVariants };
