import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const customButtonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl border",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-b from-blue-400 to-blue-600 hover:from-blue-300 hover:to-blue-500 text-white border-blue-500",
        success: "bg-gradient-to-b from-green-400 to-green-600 hover:from-green-300 hover:to-green-500 text-white border-green-500",
        warning: "bg-gradient-to-b from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 text-white border-yellow-500",
        info: "bg-gradient-to-b from-cyan-400 to-cyan-600 hover:from-cyan-300 hover:to-cyan-500 text-white border-cyan-500",
        delete: "bg-gradient-to-b from-red-400 to-red-600 hover:from-red-300 hover:to-red-500 text-white border-red-500",
        white: "bg-white hover:bg-gray-50 text-gray-900 border-gray-300 hover:border-gray-400",
        black: "bg-black hover:bg-gray-800 text-white border-gray-700 hover:border-gray-600",
      },
      size: {
        default: "px-6 py-3 text-sm",
        sm: "px-4 py-2 text-xs",
        lg: "px-8 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof customButtonVariants> {
  loading?: boolean;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, variant, size, loading, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(customButtonVariants({ variant, size, className }), "cursor-pointer")}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading ? (
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          children
        )}
      </button>
    );
  }
);

export { CustomButton, customButtonVariants };
