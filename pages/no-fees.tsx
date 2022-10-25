import type { ReactElement } from "react";
import Head from "next/head";
import Image from "next/image";

import type { NextPageWithLayout } from "@pages/_app";

import { COLORS } from "@constants";

import MainLayout from "@components/composition/MainLayout";
import MonoSection from "@components/sections/MonoSection";
import DualSection from "@components/sections/DualSection";
import BannerSection from "@components/sections/BannerSection";
import PlaceholderSection from "@components/sections/PlaceholderSection";

const NoFeesPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Banking with No Monthly Fees and No Overdraft | Chime</title>
        <meta name="description" content="Chime Clone No Fees" />
      </Head>

      {/* 1 */}
      <BannerSection
        img={{
          src: "/static/pages/no-fees/landingpage-control.png",
          alt: "Landing page control",
          originalSize: [1400, 835],
          width: {
            sm: 590,
            md: 365,
            lg: 485,
          },
        }}
      >
        <small>No Monthly Fees Online Checking Account</small>

        <h1>Banking with no monthly fees</h1>

        <p>Say goodbye to monthly fees when you bank through Chime</p>

        <ul>
          <li>No monthly fees and no minimum balance fees</li>

          <li>No overdraft fees</li>

          <li>
            60,000+ fee-free<sup>1</sup> ATMs at stores like Walgreens
            <sup>®</sup>, 7-Eleven<sup>®</sup>, CVS Pharmacy<sup>®</sup>, Circle
            K & more
          </li>
        </ul>
      </BannerSection>

      {/* 2 */}
      <DualSection
        centered
        img={{
          float: "left",
          src: "/static/pages/no-fees/no-fees.png",
          alt: "No Fees",
          originalSize: [644, 322],
          width: {
            sm: 490,
          },
        }}
      >
        <h1>Banking shouldn&apos;t cost you money</h1>

        <p>
          You earned it, so you deserve to keep it. We believe an online
          checking account with no monthly fees should be available to everyone.
          That&apos;s why Chime offers a checking account with no minimum
          balance fees and no monthly fees.
        </p>
      </DualSection>

      {/* 3 */}
      <DualSection
        centered
        img={{
          float: "right",
          src: "/static/pages/no-fees/spot-me-1.png",
          alt: "No Fees",
          originalSize: [792, 526],
          width: {
            sm: 450,
            lg: 450,
          },
        }}
      >
        <h1>No fees for overdrafts</h1>

        <p>
          Traditional banks charged $11 Billion in overdraft fees in 2019.² At
          Chime, we do things differently. Instead of charging you an overdraft
          fee, we allow you to overdraft on debit card purchases with no fees
          when you qualify for SpotMe<sup>®3</sup>. Learn more about SpotMe.
        </p>
      </DualSection>

      {/* 4 */}
      <DualSection
        centered
        img={{
          float: "left",
          src: "/static/pages/no-fees/approved.png",
          alt: "No Fees",
          originalSize: [562, 1100],
          width: {
            sm: 150,
            md: 230,
            lg: 230,
          },
        }}
      >
        <h1>
          60,000+ fee-free ATMs at stores you love<sup>1</sup>
        </h1>

        <p>
          Avoid out of network ATM fees. With Chime, you get access to 60,000+
          fee-free ATMs<sup>1</sup>—more than the top 3 national banks combined!
          Find them at stores you love, like Walgreens<sup>®</sup>, CVS
          <sup>®</sup>, 7-Eleven<sup>®</sup> and Circle K. You can also use the
          map in your Chime app to find the closest fee-free ATM near you.
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
        centered
        img={{
          float: "right",
          src: "/static/pages/no-fees/debit-card-front.png",
          alt: "No Fees",
          originalSize: [745, 483],
          width: {
            sm: 310,
            md: 310,
            lg: 310,
          },
        }}
      >
        <h1>Checking Account and Debit Card with no monthly fees</h1>

        <p>
          When you open a Chime Checking Account, you will receive a Visa Debit
          Card that can be used everywhere Visa debit cards are accepted. We
          also provide free debit card replacement.
        </p>
      </DualSection>

      {/* 6 */}
      <PlaceholderSection />

      {/* 7 */}
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

NoFeesPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default NoFeesPage;
