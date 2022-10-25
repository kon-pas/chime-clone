import * as Styled from "./styled";

import type { FC, ReactNode } from "react"

import type { HexColor } from "@types";

import ContentContainer from "@components/elements/ContentContainer";

interface MonoSectionProps {
  children: ReactNode;
  textAlign?: "start" | "center" | "end";
  width?: number;
  backgroundColor?: HexColor;
}

const MonoSection: FC<MonoSectionProps> = props => {
  return (
    <Styled.Wrapper backgroundColor={props.backgroundColor}>
      <ContentContainer>
        <Styled.ChildrenWrapper
          textAlign={props.textAlign ?? "center"}
          width={props.width ?? 500}
        >
          {props.children}
        </Styled.ChildrenWrapper>
      </ContentContainer>
    </Styled.Wrapper>
  );
};

export default MonoSection;
