import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@pages/_app";

import Head from "next/head";
import { COLORS } from "@constants";
import { MainLayout } from "@components/composition";
import { EnrollForm } from "@components/elements";
import {
  MonoSection,
  DualSection,
  BannerSection
} from "@components/sections";

const SavingsAccountPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>
          Chime High Interest Savings | Earn 1.50% APY on Any Balance
        </title>
        <meta name="description" content="Chime Clone Account Savings" />
      </Head>

      {/* 1 */}
      <BannerSection
        img={{
          align: "center",
          src: "/static/pages/savings-account/savings-hero.png",
          alt: "APY Phone",
          originalSize: [728, 1100],
          width: {
            sm: 629,
            md: 485,
          },
        }}
      >
        <small>High Yield Chime Savings Account</small>

        <h1>Make your money grow faster</h1>

        <ul>
          <li>
            Get 2.00% APY<sup>1</sup> on all your cash
          </li>
          <li>Boost your earnings with Automatic Savings features</li>
          <li>
            No monthly fees<sup>2</sup>
          </li>
        </ul>

        <EnrollForm direction="cols" label="Get Started" />

        <small>Already have an account?</small>
        <small>
          Learn how we collect and use your information by visiting our Privacy
          Policy
        </small>
      </BannerSection>

      {/* 2 */}
      <DualSection
        backgroundColor={COLORS.GRAY_LIGHT}
        img={{
          float: "left",
          src: "/static/pages/savings-account/apy.png",
          alt: "APY",
          originalSize: [774, 474],
          width: {
            sm: 490,
            md: 365,
            lg: 490,
          },
        }}
      >
        <h2>Earn more on every dollar</h2>

        <p>
          We offer 1.50% APY<sup>1</sup> on your Savings Account. That&apos;s
          11x<sup>3</sup> the national average! Learn how we got this rate.
        </p>
      </DualSection>

      {/* 3 */}
      <DualSection
        centered
        img={{
          float: "right",
          src: "/static/pages/savings-account/fees.png",
          alt: "Fees",
          originalSize: [305, 120],
          width: {
            sm: 305,
          },
        }}
      >
        <h2>No fees. No catch. No worries.</h2>

        <p>
          No minimum balance requirement, no maximums on interest earned. And no
          fees<sup>2</sup>.
        </p>
      </DualSection>

      {/* 4 */}
      <DualSection
        backgroundColor={COLORS.GRAY_LIGHT}
        img={{
          float: "left",
          src: "/static/pages/savings-account/image-7.png",
          alt: "Round Ups",
          originalSize: [587, 345],
          width: {
            sm: 510,
          },
        }}
      >
        <h2>Grow your savings automatically</h2>

        <p>
          With Round Ups, you save the change on every purchase. And Save When I
          Get Paid helps you automatically save a percentage of every paycheck
          <sup>4</sup>.
        </p>
      </DualSection>

      {/* 5 */}
      <DualSection
        centered
        img={{
          float: "right",
          src: "/static/pages/savings-account/icon-shield.png",
          alt: "Icon Shield",
          originalSize: [135, 166],
          width: {
            sm: 135,
          },
        }}
      >
        <h2>Secured and FDIC Insured</h2>

        <p>
          We use encryption and secure processes to help ensure your money is
          safe. And your funds are held at FDIC insured banks<sup>5</sup>. Learn
          how the Chime Savings Account works.
        </p>
      </DualSection>

      {/* 6 */}
      <DualSection
        backgroundColor={COLORS.GRAY_LIGHT}
        img={{
          float: "left",
          src: "/static/pages/savings-account/apy-average.png",
          alt: "APY Average",
          originalSize: [1326, 936],
          width: {
            sm: 425,
          },
        }}
      >
        <h2>How our Savings Account stacks up</h2>

        {/* List here */}
      </DualSection>

      {/* 7 */}
      <MonoSection backgroundColor={COLORS.LIME_DARK}>
        <h2>Get Started Today</h2>

        <p>
          Applying for an account is free and takes less than 2 minutes with no
          impact to your credit score.
        </p>

        <EnrollForm label="Apply Now" theme="dark" direction="mixed" />
      </MonoSection>
    </>
  );
};

SavingsAccountPage.getLayout = (page: ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

export default SavingsAccountPage;
