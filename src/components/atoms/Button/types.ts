import React from "react";
import { Size, Variant } from "@/types";

export interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
};