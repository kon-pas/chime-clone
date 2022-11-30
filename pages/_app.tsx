import GlobalStyle from "@styles/GlobalStyle.styled";

import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

import { UserContextProvider } from "@components/contexts/UserContext";
import Loader from "@components/composition/Loader";

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
      <Loader />
      <Component {...pageProps} />
    </UserContextProvider>
  );
}

export default MyApp;
