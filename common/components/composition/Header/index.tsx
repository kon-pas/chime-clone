import * as S from './Header.styled';

import Image from 'next/image';

import IconSVG from '@components/elements/IconSVG';

const Header: React.FC = () => {
  return (
    <>
      <S.Header>
        <h1>
          <Image
            src="https://www.chime.com/wp-content/themes/project-sscms-2022-09-29T19-35-23/images/brand/chime-logo.svg"
            alt="Chime Clone Home Page Brand Logo"
            width="100px"
            height="50px"
          />
        </h1>

        <nav>
          <S.Button>
            Sign Up
          </S.Button>

          <IconSVG>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </IconSVG>
        </nav>
      </S.Header>

      <S.NavigationMenuContainer>
        <header>
          <h1>
            <Image
              src="https://www.chime.com/wp-content/themes/project-sscms-2022-09-29T19-35-23/images/brand/chime-logo.svg"
              alt="Chime Clone Home Page Brand Logo"
              width="100px"
              height="50px"
            />
          </h1>
        </header>
      </S.NavigationMenuContainer>
    </>
  );
}

export default Header;