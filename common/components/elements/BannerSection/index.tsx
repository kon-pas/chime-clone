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
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.ChildrenContainer>
          {props.children}
        </Styled.ChildrenContainer>
        <Styled.ImageWrapper>

        </Styled.ImageWrapper>
      </Styled.Container>
    </Styled.Wrapper>
  );
}

export default BannerSection;