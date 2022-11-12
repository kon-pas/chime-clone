import styled from "styled-components";

import { getMedia } from "@utils";

import { getResizeTransition } from "@utils";

import ContentContainer from "@components/elements/ContentContainer";

interface ContainerProps {
  imageFloat: "left" | "right";
}

const Container = styled(ContentContainer)<ContainerProps>`
  ${getResizeTransition("padding", "gap")}

  ${getMedia("md")} {
    display: flex;
    flex-direction: ${props =>
      props.imageFloat === "left" ? "row-reverse" : "row"};
    padding: 0 2rem;
    justify-content: space-between;
  }
`;

export default Container;
