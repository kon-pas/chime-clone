import type { NextPage } from "next";
import Head from "next/head";

import { COLORS } from "@constants";

import MonoSection from "@components/sections/MonoSection";
import DualSection from "@components/sections/DualSection";
import BannerSection from "@components/sections/BannerSection";
import PlaceholderSection from "@components/sections/PlaceholderSection";

const SavingsAccountPage: NextPage = () => {
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
          src: "/static/content/savings-account/apy-phone.png",
          alt: "APY Phone",
          originalSize: [1225, 682],
          width: {
            sm: 629,
            md: 485,
          },
        }}
      >
        <small>High Yield Chime Savings Account</small>

        <h1>Make your money grow faster</h1>

        <p>
          1.50% Annual Percentage Yield (APY).<sup>1</sup> Set money aside with
          Automatic Savings features. And never pay a fee<sup>2</sup>
        </p>
      </BannerSection>

      {/* 2 */}
      <DualSection
        backgroundColor={COLORS.GRAY_LIGHT}
        img={{
          float: "left",
          src: "/static/content/savings-account/apy.png",
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
          src: "/static/content/savings-account/fees.png",
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
          src: "/static/content/savings-account/image-7.png",
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
          src: "/static/content/savings-account/icon-shield.png",
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
          src: "/static/content/savings-account/apy-average.png",
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
      <MonoSection backgroundColor={COLORS.LIME_MEDIUM}>
        <h1>Get Started Today</h1>

        <p>
          Applying for an account is free and takes less than 2 minutes with no
          impact to your credit score.
        </p>
      </MonoSection>

      {/* 8 */}
      <PlaceholderSection />
    </>
  );
};

export default SavingsAccountPage;
