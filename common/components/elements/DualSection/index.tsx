import * as Styled from "./styled";

import Image from "next/image";

import type { HexColor } from "@types";

import { COLORS } from "@constants";

interface DualSectionProps {
  children: React.ReactNode;
  img: {
    src: `https://www.chime.com/${string}`;
    alt: string;
    width: number;
    height: number;
    float?: "left" | "right";
  };
  backgroundColor?: HexColor;
}

const DualSection: React.FC<DualSectionProps> = props => {
  return (
    <Styled.Wrapper backgroundColor={props.backgroundColor ?? COLORS.WHITE}>
      <Styled.Container imageFloat={props.img.float ?? "left"}>
        <Styled.Header>{props.children}</Styled.Header>

        <Styled.ImageWrapper>
          <Image
            src={props.img.src}
            alt={props.img.alt}
            layout="responsive"
            width={props.img.width}
            height={props.img.height}
          />
        </Styled.ImageWrapper>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default DualSection;
