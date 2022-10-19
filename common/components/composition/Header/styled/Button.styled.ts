import styled from "styled-components";

import { resizeTransition, getMedia } from "@utils";

import GreenButton from "@components/elements/GreenButton";

const Button = styled(GreenButton)`
  padding: 0.5rem 1.05rem;
  margin-left: 0.5rem;

  ${getMedia('md')} {
    padding: 0.75rem 1.4rem;

    ${resizeTransition("all")}
  }

  ${getMedia('lg')} {
    padding: 0.75rem 3.85rem;
    margin-left: 1.8rem;
  }
`;

export default Button;
