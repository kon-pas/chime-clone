import * as Styled from "./PlaceholderSection.styled";

import type { FC } from "react"

const PlaceholderSection: FC = () => {
  console.warn("Placeholder component rendered. 🚧 Remove before production!");

  return (
    <Styled.Wrapper>
      🚧<br />section<br />under<br />construction
    </Styled.Wrapper>
  );
}

export default PlaceholderSection;