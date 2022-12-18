// @@@ NOTE: This is a mess.

import * as Styled from "./styled";

import type { FC, ReactNode } from "react";
import type { HexColor } from "@types";
import type { NextImageProps } from "@interfaces";

import Image from "next/image";

interface BannerSectionProps {
  children: ReactNode;
  backgroundColor?: HexColor;
  img: NextImageProps & {
    align?: "center" | "bottom" | "cover";
    coverBreakpoint?: number;
  };
  minHeight?: number;
}

const BannerSection: FC<BannerSectionProps> = props => {
  return (
    <Styled.Wrapper
      backgroundColor={props.backgroundColor}
      coverBreakpoint={props.img.coverBreakpoint}
      {...(props.img.align === "cover" && { src: props.img.src })}
      minHeight={props.minHeight}
    >
      <Styled.Container
        stretched={props.img.align === "cover"}
        minHeight={props.minHeight}
      >
        <Styled.ChildrenContainer
          stretched={props.img.align === "cover"}
          text={props.img.align === "cover" ? "light" : "dark"}
        >
          {props.children}
        </Styled.ChildrenContainer>

        {props.img.align !== "cover" && (
          <Styled.SideImage align={props.img.align} {...props.img.width}>
            <Image
              src={props.img.src}
              alt={props.img?.alt ?? ""}
              layout="responsive"
              width={props.img.originalSize[0]}
              height={props.img.originalSize[1]}
              priority
            />
          </Styled.SideImage>
        )}
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default BannerSection;
