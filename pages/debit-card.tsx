import Head from "next/head";
import Image from "next/image";

import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@pages/_app";

import { COLORS } from "@constants";
import { EnrollForm } from "@components/elements";
import { MainLayout } from "@components/composition";
import {
  MonoSection,
  DualSection,
  BannerSection,
  PlaceholderSection,
} from "@components/sections";

const DebitCardPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Free Visa Debit Card | Chime</title>
        <meta name="description" content="Chime Clone Debit Card" />
      </Head>

      {/* 1 */}
      <BannerSection
        img={{
          align: "center",
          src: "/static/pages/debit-card/debit-card-front-2.png",
          alt: "Debit Card Front",
          originalSize: [580, 377],
          width: {
            sm: 320,
            md: 385,
          },
        }}
      >
        <small>Chime Debit Card</small>

        <h1>
          Chime Checking Account and Visa<sup>®</sup> Debit Card
        </h1>

        <p>
          Your Chime Checking Account comes with a debit card, no monthly fees
          or maintenance fees.
        </p>
      </BannerSection>

      {/* 2 */}
      <DualSection
        centered
        backgroundColor={COLORS.GRAY_LIGHT}
        img={{
          float: "left",
          src: "/static/pages/debit-card/no-fees.png",
          alt: "No Fees",
          originalSize: [301, 121],
          width: {
            sm: 301,
          },
        }}
      >
        <h2>
          Forget about confusing fees for using your Debit Card or Checking
          Account
        </h2>

        <p>
          Our debit card works everywhere Visa debit cards are accepted. And
          unlike some prepaid cards and traditional bank accounts, there are no
          monthly account fees and minimum balance requirements. Out-of-network
          cash withdrawal fees apply.
        </p>
      </DualSection>

      {/* 3 */}
      <DualSection
        img={{
          float: "right",
          src: "/static/pages/debit-card/swis-1.png",
          alt: "SWIS",
          originalSize: [1032, 566],
          width: {
            sm: 545,
            md: 365,
            lg: 547,
          },
        }}
      >
        <h2>Grow your savings as you spend</h2>

        <p>
          Saving money is a no-brainer through Chime online banking. Every time
          you swipe your debit card, we round up to the nearest dollar and
          transfer the round-up from your Checking Account straight into your
          Savings Account. A magical, little way to make your money grow over
          time.
        </p>
      </DualSection>

      {/* 4 */}
      <DualSection
        backgroundColor={COLORS.GRAY_LIGHT}
        img={{
          float: "left",
          src: "/static/pages/debit-card/approved.png",
          alt: "ATM Approved",
          originalSize: [562, 1100],
          width: {
            sm: 222,
            md: 277,
            lg: 277,
          },
        }}
      >
        <h2>
          60,000+ fee-free ATMs at stores you love<sup>3</sup>
        </h2>

        <p>
          Avoid out of network ATM fees. With Chime, you get access to 60,000+
          fee-free ATMs—more than the top 3 national banks combined! Find them
          at stores you love, like Walgreens®, CVS®, and 7-Eleven®. You can also
          use the map in your Chime app to find the closest fee-free ATM near
          you.
        </p>

        <Image
          src="/static/shared/atm-locations.png"
          alt="ATC Locations"
          width={247}
          height={49}
        />
      </DualSection>

      {/* 5 */}
      <DualSection
        img={{
          float: "right",
          src: "/static/pages/debit-card/card-security.png",
          alt: "Card Security",
          originalSize: [940, 388],
          width: {
            sm: 725,
            md: 365,
            lg: 570,
          },
        }}
      >
        <h2>You&apos;re always in control</h2>

        <p>
          Can&apos;t find your Chime debit card? No worries. You can instantly
          disable transactions in the app. No need to call us or explain
          yourself. And if you need a replacement card, just let us know. Debit
          card replacement is always free!
        </p>
      </DualSection>

      {/* 6 */}
      <DualSection
        backgroundColor={COLORS.GRAY_LIGHT}
        img={{
          float: "left",
          src: "/static/pages/debit-card/pays.png",
          alt: "Pays",
          originalSize: [500, 250],
          width: {
            sm: 500,
            md: 365,
            lg: 500,
          },
        }}
      >
        <h2>We love mobile payments</h2>

        <p>
          We support mobile payment platforms including Apple Pay<sup>TM</sup>{" "}
          and Google Pay<sup>TM</sup>. Combining your Chime debit card with
          mobile pay means you can leave your wallet at home.
        </p>
      </DualSection>

      {/* 7 */}
      <PlaceholderSection />

      {/* 8 */}
      <MonoSection backgroundColor={COLORS.LIME_DARK}>
        <h2>Get Started Today</h2>

        <p>
          Applying for an account is free and takes less than 2 minutes with no
          impact to your credit score.
        </p>

        <EnrollForm label="Apply Now" theme="dark" direction="mixed" />
      </MonoSection>

      {/* 9 */}
      <PlaceholderSection />
    </>
  );
};

DebitCardPage.getLayout = (page: ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

export default DebitCardPage;
