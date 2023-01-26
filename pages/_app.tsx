import GlobalStyle from "@styles/GlobalStyle.styled";

import type { AppProps } from "next/app";
import type { NextPageWithLayout } from "@types";

import { Loader } from "@components/composition";

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
