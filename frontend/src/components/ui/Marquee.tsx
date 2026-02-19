import React, { type ComponentPropsWithoutRef } from "react";
import "./Marquee.css";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className = "",
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={`marquee-container ${vertical ? "vertical" : ""} ${className}`}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`marquee-content ${
              vertical ? "animate-marquee-vertical column" : "animate-marquee row"
            } ${pauseOnHover ? "pause-on-hover" : ""} ${reverse ? "reverse" : ""}`}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
