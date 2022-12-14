import styled from "styled-components";
import { getMedia, getResizeTransition } from "@utils";
import { GreenButton } from "@components/elements";

const Button = styled(GreenButton)`
  padding-top: 1rem;
  padding-bottom: 1rem;

  ${getResizeTransition("width", "color", "background-color")}

  ${getMedia("md")} {
    width: fit-content;
    padding: 1rem 2rem;
  }
`;

export default Button;
