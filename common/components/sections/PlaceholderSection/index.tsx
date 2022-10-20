import * as Styled from "./PlaceholderSection.styled";

const PlaceholderSection: React.FC = () => {
  console.warn("Placeholder component rendered. 🚧 Remove before production!");

  return (
    <Styled.Wrapper>
      🚧<br />section<br />under<br />construction
    </Styled.Wrapper>
  );
}

export default PlaceholderSection;