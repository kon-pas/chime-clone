import GlobalStyle from "@styles/GlobalStyle.styled";

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import { UserContextProvider } from "@components/contexts/UserContext";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || (page => page);

  return getLayout(
    <UserContextProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default MyApp;
