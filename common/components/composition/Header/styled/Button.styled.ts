import styled from "styled-components";

import { getResizeTransition, getMedia } from "@utils";

import { GreenButton } from "@components/elements";

const Button = styled(GreenButton)`
  padding: 0.5rem 1.05rem;
  margin-left: 0.5rem;

  ${getResizeTransition("padding", "margin-left")}

  ${getMedia("md")} {
    padding: 0.75rem 1.4rem;
  }

  ${getMedia("lg")} {
    padding: 0.75rem 3.85rem;
    margin-left: 1.8rem;
  }
`;

export default Button;
