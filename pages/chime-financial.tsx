import { ChimeFinancialComponents } from "@components/pages";

import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@pages/_app";

import Image from "next/image";
import Head from "next/head";

import { MainLayout } from "@components/composition";

const FaqPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Chime Financial, Inc. | Chime</title>
        <meta name="description" content="Chime Clone Financial Inc" />
      </Head>

      {/* 1 */}
      <ChimeFinancialComponents.Banner.Container>
        <ChimeFinancialComponents.Banner.Title>
          Get to know Chime
        </ChimeFinancialComponents.Banner.Title>
        <ChimeFinancialComponents.Banner.ImageWrapper>
          <Image
            src="/public/static/pages/chime-financial/community-hero.png"
            alt="Community Hero"
            width={998}
            height={508}
          />
        </ChimeFinancialComponents.Banner.ImageWrapper>
      </ChimeFinancialComponents.Banner.Container>
    </>
  );
};

FaqPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default FaqPage;
