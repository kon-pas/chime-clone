import type { NextPage } from "next";
import Head from "next/head";

import { COLORS } from "@constants";

import MonoSection from "@components/elements/MonoSection";
import DualSection from "@components/elements/DualSection";
import BreadcrumbTrial from "@components/elements/BreadcrumbTrail";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Banking with No Monthly Fees and No Overdraft | Chime</title>
        <meta name="description" content="Chime clone no fees" />
      </Head>

      {/* 1 */}
      <DualSection
        img={{
          src: "https://www.chime.com/wp-content/uploads/2020/03/no-fees.png",
          alt: "No Fees",
          originalSize: [644, 322],
          width: {
            sm: 490,
          }
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

      {/* 2 */}
      <DualSection
        img={{
          src: "https://www.chime.com/wp-content/uploads/2021/05/spot-me-1.png",
          alt: "No Fees",
          originalSize: [792, 526],
          float: "right",
          width: {
            sm: 450,
            lg: 450,
          }
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

      {/* 3 */}
      <DualSection
        img={{
          src: "https://www.chime.com/wp-content/uploads/2021/09/ATM-Image-08312021-approved.png",
          alt: "No Fees",
          originalSize: [562, 1100],
          width: {
            sm: 150,
            md: 230,
            lg: 230,
          }
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
      </DualSection>

      {/* 4 */}
      <DualSection
        img={{
          src: "https://www.chime.com/wp-content/uploads/2019/05/Debit-Card-Front.png",
          alt: "No Fees",
          originalSize: [745, 483],
          float: "right",
          width: {
            sm: 310,
            md: 310,
            lg: 310,
          }
        }}
      >
        <h1>Checking Account and Debit Card with no monthly fees</h1>
        <p>
          When you open a Chime Checking Account, you will receive a Visa Debit
          Card that can be used everywhere Visa debit cards are accepted. We
          also provide free debit card replacement.
        </p>
      </DualSection>

      {/* 5 */}
      <MonoSection backgroundColor={COLORS.LIME_MEDIUM}>
        <h1>
          Get Started Today
        </h1>

        <p>
          Applying for an account is free and takes less than 2 minutes with no impact to your credit score. 
        </p>
      </MonoSection>

      <BreadcrumbTrial />
    </>
  );
};

export default Home;
