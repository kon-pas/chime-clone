import styled from "styled-components";

import { resizeTransition, getMedia } from "@utils";

import GreenButton from "@components/elements/GreenButton";

const Button = styled(GreenButton)`
  padding-top: 1rem;
  padding-bottom: 1rem;

  // ${resizeTransition('padding-top', 'padding-bottom')}

  ${getMedia('md')} {
    width: fit-content;
    padding: 1rem 2rem;
  }
`;

export default Button;