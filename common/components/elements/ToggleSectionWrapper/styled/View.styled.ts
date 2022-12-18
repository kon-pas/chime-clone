import styled from "styled-components";

interface ViewProps {
  visible: boolean;
}

const View = styled.div<ViewProps>`
  display: ${props => (props.visible ? "block" : "none")};
`;

export default View;
