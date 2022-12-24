import * as Styled from "./styled";

import type { FC, ReactNode } from "react";
import type { HexColor } from "@types";
import type { NextImageProps } from "@interfaces";

import Image from "next/image";
import { COLORS } from "@constants";

interface DualSectionProps {
  children: ReactNode;
  img: NextImageProps & {
    float?: "left" | "right";
  };
  backgroundColor?: HexColor;
  centered?: boolean;
}

const DualSection: FC<DualSectionProps> = props => {
  return (
    <Styled.Wrapper backgroundColor={props.backgroundColor ?? COLORS.WHITE}>
      <Styled.Container imageFloat={props.img.float ?? "left"}>
        <Styled.ChildrenWrapper isCentered={props.centered}>
          {props.children}
        </Styled.ChildrenWrapper>

        <Styled.ImageWrapper {...props.img.width}>
          <Image
            src={props.img.src}
            alt={props.img.alt}
            layout="responsive"
            width={props.img.originalSize[0]}
            height={props.img.originalSize[1]}
          />
        </Styled.ImageWrapper>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default DualSection;
