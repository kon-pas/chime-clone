import styled from "styled-components";

import { getMedia } from "@utils";

import { resizeTransition } from "@utils";

import ContentContainer from "@components/elements/ContentContainer";

interface ContainerProps {
  imageFloat: "left" | "right";
}

const Container = styled(ContentContainer)<ContainerProps>`
  ${resizeTransition("all")}

  ${getMedia('md')} {
    display: flex;
    flex-direction: ${props => props.imageFloat === "left" ? "row-reverse" : "row"};
    gap: 2rem;
    padding: 0 2rem;
    justify-content: space-between;
  }
`;

export default Container;
