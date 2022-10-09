import StyledButton from "./Button.styled";

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children }) => (
  <StyledButton>{children}</StyledButton>
);

export default Button;
