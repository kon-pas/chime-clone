import * as S from './Button.styled';

interface ButtonProps {
  label: string;
}

const Button: React.FC<ButtonProps> = ({label}) => {
  return (
    <>
      {label}
    </>
  )
}

export default Button;