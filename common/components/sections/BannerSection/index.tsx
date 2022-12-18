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
}

const BannerSection: FC<BannerSectionProps> = props => {
  return (
    <Styled.Wrapper
      backgroundColor={props.backgroundColor}
      coverBreakpoint={props.img.coverBreakpoint}
      {...(props.img.align === "cover" && { src: props.img.src })}
    >
      <Styled.Container>
        <Styled.ChildrenContainer
          stretched={props.img.align === "cover"}
          {...(props.img.align === "cover" && { text: "light" })}
        >
          {props.children}
        </Styled.ChildrenContainer>

        {props.img.align !== "cover" && (
          <Styled.SideImage align={props.img.align} {...props.img.width}>
            <Image
              // @@@ TODO: Choose better key.
              key={props.img.src}
              src={props.img.src}
              alt={props.img.alt}
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
