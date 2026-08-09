import { HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "glass" | "interactive";
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className = "", variant = "default", children, ...props }, ref) => {
        const baseStyles = "rounded-2xl overflow-hidden transition-all duration-300";

        const variants = {
            default: "bg-white shadow-sm border border-gray-100",
            glass: "backdrop-blur-md bg-white/10 border border-white/20 shadow-lg",
            interactive: "bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 cursor-pointer border border-gray-100",
        };

        return (
            <div
                ref={ref}
                className={`${baseStyles} ${variants[variant]} ${className}`}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Card.displayName = "Card";

export default Card;
