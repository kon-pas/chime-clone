import "@styles/fonts.css";

import GlobalStyle from "@styles/GlobalStyle.styled";

import { useEffect, useState } from "react";

import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import MainLayout from "@components/composition/MainLayout";
import LoadingPage from "@components/composition/LoadingPage";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { events } = useRouter();

  useEffect(() => {
    const hidePageContent = ()  => setIsLoading(true);
    const showPageContent = ()  => setIsLoading(false);

    events.on("routeChangeStart", hidePageContent);
    events.on("routeChangeComplete", showPageContent);
    events.on("routeChangeError", showPageContent);

    return () => {
      events.off("routeChangeStart", hidePageContent);
      events.off("routeChangeComplete", showPageContent);
      events.off("routeChangeError", showPageContent);
    }
  })

  return isLoading
    ? <LoadingPage />
    : (
    <MainLayout>
      <GlobalStyle />
      <Component {...pageProps} />
    </MainLayout>
    );
}

export default MyApp;
