import '@styles/fonts.css';

import type { AppProps } from 'next/app';

import MainLayout from '@components/composition/MainLayout';

import GlobalStyle from '@styles/GlobalStyle.styled';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MainLayout>
      <GlobalStyle />
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
