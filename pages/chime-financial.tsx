import { ChimeFinancialComponents } from "@components/pages";

import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@pages/_app";

import Image from "next/image";
import Head from "next/head";

import { ToggleBox } from "@components/elements";
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
        <ChimeFinancialComponents.Banner.BackgroundColor />

        <ChimeFinancialComponents.Banner.Title>
          Get to know Chime
        </ChimeFinancialComponents.Banner.Title>

        <ChimeFinancialComponents.Banner.ImageWrapper>
          <Image
            src="/static/pages/chime-financial/community-hero.png"
            alt="Community Hero"
            width={785}
            height={400}
          />
        </ChimeFinancialComponents.Banner.ImageWrapper>
      </ChimeFinancialComponents.Banner.Container>

      {/* 2 */}
      <ChimeFinancialComponents.Section.Container>
        <ChimeFinancialComponents.Section.Title>
          Financial peace of mind
        </ChimeFinancialComponents.Section.Title>

        <ChimeFinancialComponents.Section.Content>
          <ToggleBox label="Helpful, easy, free" opened>
            <p>
              Chime is a financial technology company founded on a simple idea:
              everyday banking and payment services should be helpful, easy, and
              free. Our mission is to help our members &ndash; everyday people
              who aren&apos;t well-served by traditional banks &ndash; achieve
              financial peace of mind, together. Now more than ever, people are
              looking for an alternative to fee-based banking that&apos;s
              aligned with their best interests. Chime offers everyday consumers
              that choice. We helped bring features to market that were
              unavailable to most consumers just a few years ago &ndash;
              including early access to paychecks, accounts with no monthly
              fees, and fee-free overdrafts up to $200. We also offer a secured
              credit card that enables people to safely build credit. And with
              60,000+ fee-free ATMs nationwide &ndash; a larger network than the
              four biggest U.S. banks combined &ndash; Chime members never have
              to look far to access cash. Millions of people trust Chime every
              day.
            </p>
          </ToggleBox>
        </ChimeFinancialComponents.Section.Content>
      </ChimeFinancialComponents.Section.Container>
    </>
  );
};

FaqPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default FaqPage;
