"use client";

import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { Toaster as Sonner, type ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      icons={{
        success: <CircleCheckIcon className="size-4 text-green-600" />,
        info: <InfoIcon className="size-4 text-blue-600" />,
        warning: <TriangleAlertIcon className="size-4 text-yellow-600" />,
        error: <OctagonXIcon className="size-4 text-red-600" />,
        loading: <Loader2Icon className="size-4 animate-spin text-gray-600" />,
      }}
      toastOptions={{
        style: {
          background: "white",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          boxShadow:
            "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
          color: "#374151",
          fontSize: "14px",
          fontWeight: "500",
        },
        classNames: {
          success: "bg-white border-green-200 text-green-800",
          error: "bg-white border-red-200 text-red-800",
          warning: "bg-white border-yellow-200 text-yellow-800",
          info: "bg-white border-blue-200 text-blue-800",
        },
      }}
      style={
        {
          "--normal-bg": "white",
          "--normal-text": "#374151",
          "--normal-border": "#e5e7eb",
          "--border-radius": "8px",
          "--success-bg": "white",
          "--success-text": "#059669",
          "--success-border": "#a7f3d0",
          "--error-bg": "white",
          "--error-text": "#dc2626",
          "--error-border": "#fecaca",
          "--warning-bg": "white",
          "--warning-text": "#d97706",
          "--warning-border": "#fde68a",
          "--info-bg": "white",
          "--info-text": "#2563eb",
          "--info-border": "#bfdbfe",
        } as React.CSSProperties
      }
      {...props}
    />
  );
};

export { Toaster };
