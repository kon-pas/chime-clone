import GlobalStyle from "@styles/GlobalStyle.styled";

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import { Loader } from "@components/composition";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || (page => page);

  return getLayout(
    <>
      <GlobalStyle />
      <Loader />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
