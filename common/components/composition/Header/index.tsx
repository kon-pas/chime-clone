import * as S from './styled';

import { useState } from 'react';

import Image from 'next/image';

import { NAVIGATION_ITEMS } from '@constants';

import IconSVG from '@components/elements/IconSVG';

const Header: React.FC = () => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

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

        <S.MenuDesktop>
          <menu>
            {NAVIGATION_ITEMS.map((item, idx) =>
              <li key={idx}>
                <S.Span>
                  {item.label}
                </S.Span>

                <S.SubmenuDesktop>
                  <menu>
                    {item.subitems.map((item, idx) =>
                      <li key={idx}>
                        {item.label}
                      </li>
                    )}
                  </menu>
                </S.SubmenuDesktop>
              </li>
            )}
          </menu>
        </S.MenuDesktop>

        <nav>
          {/* Log In */}

          <S.Span>
            Log In
          </S.Span>

          <S.Button>
            Sign Up
          </S.Button>

          <IconSVG onClick={() => setIsOpened(isOpened => !isOpened)}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </IconSVG>
        </nav>
      </S.Header>

      <S.Menu isVisible={isOpened} >
        <header>
          <h1>
            <Image
              src="https://www.chime.com/wp-content/themes/project-sscms-2022-09-29T19-35-23/images/brand/chime-logo.svg"
              alt="Chime Clone Home Page Brand Logo"
              width="100px"
              height="60px"
            />
          </h1>

          <IconSVG onClick={() => setIsOpened(isOpened => !isOpened)}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </IconSVG>
        </header>

        <nav>
          <menu>
            {NAVIGATION_ITEMS.map((item, idx) =>
              <li key={idx}>
                <a>{item.label}</a>
                <menu>
                  {item.subitems.map((subitem, idx) =>
                    <li key={idx}>
                      <a>
                        {subitem.label}
                      </a>
                    </li>
                  )}
                </menu>
              </li>
            )}
          </menu>
        </nav>

        <S.AccountActions>
          <div>Log In</div>
          <div>Sign Up</div>
        </S.AccountActions>
      </S.Menu>
    </>
  );
}

export default Header;