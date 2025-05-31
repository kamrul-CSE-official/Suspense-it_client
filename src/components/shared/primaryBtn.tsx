"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface IPrimaryBtnProps {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  size?: "default" | "sm" | "lg" | "icon";
  disabled?: boolean;
}

const PrimaryBtn = ({
  children,
  icon,
  onClick,
  type = "button",
  className = "",
  size = "lg",
  disabled = false,
}: IPrimaryBtnProps) => {
  return (
    <Button
      size={size}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700",
        className
      )}
    >
      {children}
      {icon && <span className="ml-2">{icon}</span>}
    </Button>
  );
};

export default PrimaryBtn;
