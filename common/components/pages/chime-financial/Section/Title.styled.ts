import styled from "styled-components";
import { COLORS } from "@constants";
import { getMedia, getResizeTransition } from "@utils";

const Title = styled.h2`
  font-size: 1.9rem;
  line-height: 2.65rem;
  letter-spacing: 0.005em;
  border-bottom: 1px solid ${COLORS.GRAY_MEDIUM};
  padding-bottom: 2rem;

  ${getResizeTransition("font-size", "margin-top")}

  ${getMedia("md")} {
    border-bottom: none;
    margin-top: 1.7rem;
  }

  ${getMedia("lg")} {
    font-size: 2.1rem;
    margin-top: 1.8rem;
  }
`;

export default Title;
