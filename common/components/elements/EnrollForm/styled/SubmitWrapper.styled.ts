import styled from "styled-components";

interface SubmitWrapperProps {
  shrink: boolean;
}

const SubmitWrapper = styled.div<SubmitWrapperProps>`
  ${props => props.shrink && `width: 100%;`}
`;

export default SubmitWrapper;
