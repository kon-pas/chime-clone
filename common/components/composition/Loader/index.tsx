import * as Styled from "./Loader.styled";

import type { FC } from "react";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { IconSVG } from "@components/elements";

const Loader: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { events } = useRouter();

  useEffect(() => {
    const hidePageContent = () => {
      window.scrollTo(0, 0);
      setIsLoading(true);
    };
    const showPageContent = () => setIsLoading(false);

    events.on("routeChangeStart", hidePageContent);
    events.on("routeChangeComplete", showPageContent);
    events.on("routeChangeError", showPageContent);

    return () => {
      events.off("routeChangeStart", hidePageContent);
      events.off("routeChangeComplete", showPageContent);
      events.off("routeChangeError", showPageContent);
    };
  });

  return (
    <>
      {isLoading && (
        <Styled.LoaderWrapper>
          <Styled.AnimationWrapper>
            <IconSVG>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </IconSVG>
          </Styled.AnimationWrapper>
        </Styled.LoaderWrapper>
      )}
    </>
  );
};

export default Loader;
