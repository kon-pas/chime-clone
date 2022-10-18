import GlobalStyle from "@styles/GlobalStyle.styled";

import type { AppProps } from "next/app";

import Layout from "@components/composition/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyle /> 
      <Component {...pageProps} />
    </Layout>
    );
}

export default MyApp;
