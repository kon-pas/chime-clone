import * as Styled from "./styled";

import Image from "next/image";

import type { HexColor } from "@types";

import { COLORS } from "@constants";

interface DualSectionProps {
  children: React.ReactNode;
  img: {
    src: `https://www.chime.com/${string}`;
    alt: string;
    originalSize: [number, number];
    float?: "left" | "right";
    width?: {
      sm?: number;
      md?: number;
      lg?: number;
    }
  };
  backgroundColor?: HexColor;
}

const DualSection: React.FC<DualSectionProps> = props => {
  return (
    <Styled.Wrapper backgroundColor={props.backgroundColor ?? COLORS.WHITE}>
      <Styled.Container imageFloat={props.img.float ?? "left"}>
        <Styled.Header>{props.children}</Styled.Header>

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
