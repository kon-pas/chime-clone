import StyledButton from './Button.styled';

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({children}) => {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  )
}

export default Button;