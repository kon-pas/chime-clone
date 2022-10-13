import * as S from "./styled";

import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { NAVIGATION_ITEMS } from "@constants";

import IconSVG from "@components/elements/IconSVG";

const Header: React.FC = () => {
  const [isSpliderOpened, setIsSpliderOpened] = useState<boolean>(false);

  const { events } = useRouter();

  useEffect(() => {
    const closeModal = () => setIsSpliderOpened(false);

    events.on("routeChangeComplete", closeModal);
    return () => events.off("routeChangeComplete", closeModal);
  }, [events]);

  return (
    <>
      <S.Header>
        <h1>
          <Image
            src="https://www.chime.com/wp-content/themes/project-sscms-2022-09-29T19-35-23/images/brand/chime-logo.svg"
            alt="Chime Logo"
            width="90px"
            height="30px"
          />
        </h1>

        <S.MenuContainerDesktop>
          <menu>
            {NAVIGATION_ITEMS.map((item, idx) => (
              <li key={idx}>
                {item.path
                  ? (
                      <Link href={item.path}>
                        <S.Span>{item.label}</S.Span>
                      </Link>
                    )
                  : <S.Span><span style={{opacity: 0.3}}>{item.label}</span></S.Span>
                }

                <S.SubmenuContainerDesktop>
                  <menu>
                    {item.subitems.map((subitem, idx) =>
                      <li key={idx}>
                        {subitem.path
                          ? <Link href={subitem.path}>{subitem.label}</Link>
                          : <span style={{opacity: 0.3}}>{subitem.label}</span>
                        }
                      </li>
                    )}
                  </menu>
                </S.SubmenuContainerDesktop>
              </li>
            ))}
          </menu>
        </S.MenuContainerDesktop>

        <nav>
          <S.Span>Log In</S.Span>

          <S.Button>Sign Up</S.Button>

          <IconSVG onClick={() => setIsSpliderOpened(isSpliderOpened => !isSpliderOpened)}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </IconSVG>
        </nav>
      </S.Header>

      <S.SlidePageContainer isVisible={isSpliderOpened}>
        <header>
          <h1>
            <Link href="/">
              <Image
                src="https://www.chime.com/wp-content/themes/project-sscms-2022-09-29T19-35-23/images/brand/chime-logo.svg"
                alt="Chime Logo"
                width="90px"
                height="30px"
              />
            </Link>
          </h1>

          <IconSVG onClick={() => setIsSpliderOpened(isSpliderOpened => !isSpliderOpened)}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </IconSVG>
        </header>

        <S.MenuContainer>
          <menu>
            {NAVIGATION_ITEMS.map((item, idx) => (
              <li key={idx}>
                {item.path
                  ? <Link href={item.path}>{item.label}</Link>
                  : <span style={{opacity: 0.3}}>{item.label}</span>
                }

                <menu>
                  {item.subitems.map((subitem, idx) => (
                    <li key={idx}>
                      {subitem.path
                        ? <Link href={subitem.path}><span>{subitem.label}</span></Link>
                        : <span style={{opacity: 0.3}}>{subitem.label}</span>
                      }
                    </li>
                  ))}
                </menu>
              </li>
            ))}
          </menu>
        </S.MenuContainer>

        <S.AccountActions>
          <div>Log In</div>
          <div>Sign Up</div>
        </S.AccountActions>
      </S.SlidePageContainer>
    </>
  );
};

export default Header;
