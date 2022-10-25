import * as Styled from "./styled";

import type { FC } from "react";
import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { NAVIGATION_ITEMS } from "@constants";

import IconSVG from "@components/elements/IconSVG";

const Header: FC = () => {
  const [isSpliderOpened, setIsSpliderOpened] = useState<boolean>(false);

  const { events } = useRouter();

  useEffect(() => {
    const closeModal = () => setIsSpliderOpened(false);

    events.on("routeChangeComplete", closeModal);
    return () => events.off("routeChangeComplete", closeModal);
  }, [events]);

  return (
    <>
      <Styled.Header>
        <Link href="/" passHref>
          <h1>
            <a>
              <Image
                src="/static/components/Header/chime-logo.svg"
                alt="Chime Logo"
                width="90px"
                height="30px"
              />
            </a>
          </h1>
        </Link>

        <Styled.MenuContainerDesktop>
          <menu>
            {NAVIGATION_ITEMS.map((item, idx) => (
              <li key={idx}>
                {item.path
                  ? (
                      <Styled.Span>
                        <Link href={item.path}>{item.label}</Link>
                      </Styled.Span>
                    )
                  : <Styled.Span><span style={{opacity: 0.3}}>{item.label}</span></Styled.Span>
                }

                <Styled.SubmenuContainerDesktop>
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
                </Styled.SubmenuContainerDesktop>
              </li>
            ))}
          </menu>
        </Styled.MenuContainerDesktop>

        <nav>
          <Link href="/users/log-in">
            <Styled.Span>Log In</Styled.Span>
          </Link>

          <Link href="/users/sign-up">
            <Styled.Button>Sign Up</Styled.Button>
          </Link>

          <IconSVG onClick={() => setIsSpliderOpened(isSpliderOpened => !isSpliderOpened)}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </IconSVG>
        </nav>
      </Styled.Header>

      <Styled.ModalContainer isVisible={isSpliderOpened}>
        <header>
          <Link href="/" passHref>
            <h1>
              <a>
                <Image
                  src="/static/components/Header/chime-logo.svg"
                  alt="Chime Logo"
                  width="90px"
                  height="30px"
                />
              </a>
            </h1>
          </Link>

          <IconSVG onClick={() => setIsSpliderOpened(isSpliderOpened => !isSpliderOpened)}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </IconSVG>
        </header>

        <Styled.MenuContainer>
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
        </Styled.MenuContainer>

        <Styled.AccountActions>
          <div>Log In</div>
          <div>Sign Up</div>
        </Styled.AccountActions>
      </Styled.ModalContainer>
    </>
  );
};

export default Header;
