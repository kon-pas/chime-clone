import styled from "styled-components";
import { h2 } from "@styles/Tags.styled";
import { getMedia } from "@utils";

const Title = styled.h2`
  ${h2}
  width: 100%;
  text-align: center;

  ${getMedia("md")} {
    grid-column: span 3 / span 3;
  }
`;

export default Title;
