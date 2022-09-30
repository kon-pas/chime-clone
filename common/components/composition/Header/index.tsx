import * as S from './Header.styled';

const Header: React.FC = () => {
  return (
    <S.Header>
      <S.BrandLogo>
        Chime
      </S.BrandLogo>

      <S.Navigation>
        <S.Button>
          Sign Up
        </S.Button>

        <div>
          burger
        </div>
      </S.Navigation>
    </S.Header>
  );
}

export default Header;