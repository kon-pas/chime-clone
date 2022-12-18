import styled from "styled-components";

interface ViewProps {
  visible: boolean;
  minHeight?: number;
}

const View = styled.div<ViewProps>`
  display: ${props => (props.visible ? "block" : "none")};
  display: ${props => props.minHeight && `min-height: ${props.minHeight};`};
`;

export default View;
