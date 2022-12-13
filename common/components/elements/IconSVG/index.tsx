import * as Styled from "./IconSVG.styled";

import type { FC, ReactNode } from "react";

interface IconSVGProps {
  children: ReactNode;
  strokeWidth?: number;
  title?: string;
  desc?: string;
  filled?: boolean;
  onClick?: () => void;
}

const IconSVG: FC<IconSVGProps> = ({
  children: path,
  strokeWidth,
  title,
  desc,
  filled = false,
  onClick,
}) => {
  return (
    <Styled.SVG
      onClick={() => onClick && onClick()}
      xmlns="http://www.w3.org/2000/svg"
      fill={filled ? "currentColor" : "none"}
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth ?? 1.75}
      stroke="currentColor"
      role="img"
      aria-hidden={title ? false : true}
      aria-label={`${title ?? null} ${desc ?? null}`}
      aria-labelledby={`${title ? "titleID" : null} ${desc ? "descID" : null}`}
    >
      {title && <title id={title}>{title}</title>}
      {desc && <desc id={desc}>{desc}</desc>}
      {path}
    </Styled.SVG>
  );
};

export default IconSVG;
