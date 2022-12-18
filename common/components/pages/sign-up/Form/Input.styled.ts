import styled from "styled-components";

import { Input as LogInInput } from "@components/pages/log-in/Form";

interface InputProps {
  width?: number;
}

const Input = styled(LogInInput)<InputProps>`
  width: ${props => props.width ?? 100}%;
  display: inline-block;
`;

export default Input;
