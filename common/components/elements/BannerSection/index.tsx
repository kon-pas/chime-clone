import * as Styled from "./styled";

import Image from "next/image";

import type { HexColor } from "@types";
import type { NextImageProps } from "@interfaces";

interface BannerSectionProps {
  children: React.ReactNode;
  backgroundColor?: HexColor;
  img: NextImageProps & {
    align?: "center" | "bottom";
  };
}

const BannerSection: React.FC<BannerSectionProps> = props => {
  return (
    <Styled.Wrapper backgroundColor={props.backgroundColor}>
      <Styled.Container>
        <Styled.ChildrenContainer>
          {props.children}
        </Styled.ChildrenContainer>

        <Styled.ImageWrapper>
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
}

export default BannerSection;