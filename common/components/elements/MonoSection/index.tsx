import * as Styled from "./styled";

import type { HexColor } from "@types";

import ContentContainer from "@components/elements/ContentContainer";

interface MonoSectionProps {
  children: React.ReactNode;
  backgroundColor?: HexColor;
}

const MonoSection: React.FC<MonoSectionProps> = props => {
  return (
    <Styled.Wrapper backgroundColor={props.backgroundColor}>
      <ContentContainer>
        <Styled.ChildrenWrapper>
          {props.children}
        </Styled.ChildrenWrapper>
      </ContentContainer>
    </Styled.Wrapper>
  );
}

export default MonoSection;