import type { NextPage } from "next";
import Head from "next/head";

import { COLORS } from "@constants";

import MonoSection from "@components/sections/MonoSection";
import DualSection from "@components/sections/DualSection";
import BannerSection from "@components/sections/BannerSection";

const GetPaidEarlyPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Get Paid Early | Chime</title>
        <meta name="description" content="Chime Clone Get Paid Early" />
      </Head>

      {/* 1 */}
      <BannerSection
        img={{
          align: "center",
          src: "/static/content/get-paid-early/calendar-2.png",
          alt: "Calendar",
          originalSize: [528, 352],
          width: {
            sm: 525,
            md: 365,
            lg: 485,
          },
        }}
      >
        <small>Get paid early with Early Direct Deposit</small>

        <h1>
          Get your paycheck up to two days early<sup>1</sup>
        </h1>

        <p>
          Get your paycheck early<sup>1</sup> with direct deposit. That&apos;s
          up to two more days to do more with your money. Stop waiting and start
          getting paid early!
        </p>
      </BannerSection>

      {/* 2 */}
      <DualSection
        backgroundColor={COLORS.GRAY_LIGHT}
        img={{
          float: "left",
          src: "/static/content/get-paid-early/website-payday.png",
          alt: "Website Payday",
          originalSize: [792, 362],
          width: {
            sm: 656,
            md: 547,
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

      {/* 3 */}
      <DualSection
        img={{
          float: "right",
          src: "/static/content/get-paid-early/notification-mobile.png",
          alt: "Website Payday",
          originalSize: [750, 559],
          width: {
            sm: 402,
          },
        }}
      >
        <h2>How to get paid early with direct deposit</h2>

        <p>
          Chime is more than a get paid early app. We offer a mobile banking
          account – including early direct deposit<sup>1</sup> – on behalf of
          our partners. One of the easiest ways to fund your Chime Checking
          Account is to set up direct deposit, which can be done in the Chime
          mobile app. When you open an account through Chime, you can email
          yourself a pre-filled direct deposit form that you can hand over to
          your employer. It&apos;s that easy to start getting paid early
          <sup>1</sup> with direct deposit.
        </p>
      </DualSection>

      {/* 4 */}
      <MonoSection backgroundColor={COLORS.LIME_MEDIUM}>
        <h1>Get Started Today</h1>

        <p>
          Applying for an account is free and takes less than 2 minutes with no
          impact to your credit score.
        </p>
      </MonoSection>
    </>
  );
};

export default GetPaidEarlyPage;
