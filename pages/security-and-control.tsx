import type { ReactElement } from "react";
import Head from "next/head";

import type { NextPageWithLayout } from "@pages/_app";

import { COLORS } from "@constants";

import MainLayout from "@components/composition/MainLayout";
import MonoSection from "@components/sections/MonoSection";
import DualSection from "@components/sections/DualSection";
import BannerSection from "@components/sections/BannerSection";
import PlaceholderSection from "@components/sections/PlaceholderSection";

const SecurityAndControlPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Security and Control | Chime</title>
        <meta name="description" content="Chime Clone Security and Control" />
      </Head>

      {/* 1 */}
      <BannerSection
        img={{
          align: "center",
          src: "/static/pages/security-and-control/asset-shield.png",
          alt: "Shield",
          originalSize: [326, 412],
          width: {
            sm: 280,
            md: 238,
          },
        }}
      >
        <small>Security and control</small>

        <h1>We take security seriously</h1>

        <p>
          At Chime, information security is a top priority. Deposits are FDIC
          insured up to $250,000 through The Bancorp Bank or Stride Bank, N.A.,
          Members FDIC. And we work hard to protect your information, such as by
          using encryption and other measures to help safeguard your money and
          data.
        </p>
      </BannerSection>

      {/* 2 */}
      <DualSection
        backgroundColor={COLORS.GRAY_LIGHT}
        img={{
          float: "left",
          src: "/static/pages/security-and-control/card-security-mobile.png",
          alt: "Card Security",
          originalSize: [750, 310],
          width: {
            sm: 726,
            md: 365,
            lg: 570,
          },
        }}
      >
        <h2>Instantly block your card</h2>

        <p>
          If your card is missing or you suspect unauthorized use, you can block
          all transactions on your Chime debit card and Credit Builder card.
          Open the Chime app and disable transactions to immediately prevent new
          debit or credit card purchases or ATM withdrawals.
        </p>
      </DualSection>

      {/* 3 */}
      <DualSection
        img={{
          float: "right",
          src: "/static/pages/security-and-control/website-notifications-mobile.png",
          alt: "Website Notifications",
          originalSize: [750, 511],
          width: {
            sm: 440,
            md: 365,
            lg: 440,
          },
        }}
      >
        <h2>Instantly block your card</h2>

        <p>
          If your card is missing or you suspect unauthorized use, you can block
          all transactions on your Chime debit card and Credit Builder card.
          Open the Chime app and disable transactions to immediately prevent new
          debit or credit card purchases or ATM withdrawals.
        </p>
      </DualSection>

      {/* 4 */}
      <PlaceholderSection />

      {/* 5 */}
      <MonoSection backgroundColor={COLORS.LIME_MEDIUM}>
        <h2>Get Started Today</h2>

        <p>
          Applying for an account is free and takes less than 2 minutes with no
          impact to your credit score.
        </p>
      </MonoSection>
    </>
  );
};

SecurityAndControlPage.getLayout = (page: ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

export default SecurityAndControlPage;
