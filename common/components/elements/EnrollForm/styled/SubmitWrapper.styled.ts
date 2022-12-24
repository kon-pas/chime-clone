import styled from "styled-components";

import { getMedia } from "@utils";

interface SubmitWrapperProps {
  direction: "rows" | "cols" | "mixed";
}

const SubmitWrapper = styled.div<SubmitWrapperProps>`
  ${props =>
    (props.direction === "cols" || props.direction === "mixed") &&
    `width: 100%;`}

  ${getMedia("md")} {
    ${props => props.direction === "mixed" && `width: fit-content;`}
  }
`;

export default SubmitWrapper;
