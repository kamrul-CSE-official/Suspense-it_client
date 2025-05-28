import React, { type FC } from "react";
import Image from "next/image";
import clsx from "clsx";

interface LogoProps {
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
  xxl?: string;
  className?: string;
}

const Logo: FC<LogoProps> = ({ sm, md, lg, xl, xxl, className }) => {
  const sizeClass = clsx(
    sm && `sm:${sm}`,
    md && `md:${md}`,
    lg && `lg:${lg}`,
    xl && `xl:${xl}`,
    xxl && `2xl:${xxl}`,
    className,
  );

  return (
    <Image
      className={sizeClass}
      src="/assets/images/logo wobg.png"
      alt="Logo"
      width={600}
      height={600}
      priority
    />
  );
};

export default Logo;
