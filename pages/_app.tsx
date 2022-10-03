import '@styles/fonts.css';

import GlobalStyle from '@styles/GlobalStyle.styled';

import type { AppProps } from 'next/app';

import MainLayout from '@components/composition/MainLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <GlobalStyle />

      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
