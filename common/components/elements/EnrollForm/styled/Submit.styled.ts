import styled from "styled-components";

import { getMedia } from "@utils";

import GreenButton from "@components/elements/GreenButton/GreenButton.styled";

const Submit = styled(GreenButton)`
  width: 100%;

  ${getMedia("md")} {
    width: auto;
  }
`;

export default Submit;
