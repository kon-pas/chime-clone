import styled from "styled-components";
import { container } from "@styles/Mixins.styled";
import { getMedia, getResizeTransition } from "@utils";

interface ContainerProps {
  stretched: boolean;
  minHeight?: number;
}

const Container = styled.div<ContainerProps>`
  ${container};

  padding: 0 1.4rem;
  position: relative;
  flex-direction: row;
  height: 100%;

  ${props => props.stretched && `display: flex;`}
  ${props => props.stretched && `text-align: center;`}
  ${props =>
    props.minHeight &&
    `
    min-height: ${props.minHeight}px;
  `}

  ${getResizeTransition("all")}

  ${getMedia("md")} {
    text-align: start;
    display: flex;
    gap: 2rem;
    justify-content: space-between;
  }
`;

export default Container;
