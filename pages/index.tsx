import { HomePageComponents } from "@components/pages";

import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@types";

import { useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";

import { COLORS } from "@constants";
import { MainLayout } from "@components/composition";
import { DualSection, BannerSection } from "@components/sections";
import {
  BrandsLogoLine,
  EnrollForm,
  ToggleSectionWrapper,
} from "@components/elements";

const HomePage: NextPageWithLayout = () => {
  const inputsRef = useRef<HTMLInputElement[]>([]);

  return (
    <>
      <Head>
        <title>
          Chime - Banking with No Monthly Fees. Fee-Free Overdraft. Build Craft.
        </title>
        <meta name="description" content="Chime Clone Home Page" />
      </Head>

      {/* 1 */}
      <ToggleSectionWrapper
        pauseRef={inputsRef}
        views={[
          // 1.1
          <BannerSection
            key="/static/pages/home/web-01-app-desktop.png"
            minHeight={550}
            img={{
              align: "cover",
              src: "/static/pages/home/web-01-app-desktop.png",
              originalSize: [1072, 307],
              coverBreakpoint: 70,
            }}
          >
            <h1>#1 most loved banking app</h1>

            <EnrollForm
              direction="mixed"
              ref={e => (inputsRef.current[0] = e as HTMLInputElement)}
            />

            <small>Already have an account?</small>
            <small>
              Learn how we collect and use your information by visiting our
              Privacy Policy
            </small>
            <small>
              Chime is a financial technology company, not a bank. Banking
              services provided by The Bancorp Bank, N.A. or Stride Bank, N.A.;
              Members FDIC
            </small>
          </BannerSection>,

          // 1.2
          <BannerSection
            key="/static/pages/home/web-02-cb-desktop.png"
            minHeight={550}
            img={{
              align: "cover",
              src: "/static/pages/home/web-02-cb-desktop.png",
              originalSize: [1072, 307],
              coverBreakpoint: 60,
            }}
          >
            <h1>Build credit history with no annual fees or interest</h1>

            <EnrollForm
              direction="mixed"
              ref={e => (inputsRef.current[1] = e as HTMLInputElement)}
            />

            <small>Already have an account?</small>
            <small>
              Learn how we collect and use your information by visiting our
              Privacy Policy
            </small>
            <small>
              Chime is a financial technology company, not a bank. Banking
              services provided by The Bancorp Bank, N.A. or Stride Bank, N.A.;
              Members FDIC
            </small>
          </BannerSection>,

          // 1.3
          <BannerSection
            key="/static/pages/home/web-03-gpe-desktop.jpg"
            minHeight={550}
            img={{
              align: "cover",
              src: "/static/pages/home/web-03-gpe-desktop.jpg",
              originalSize: [1072, 307],
              coverBreakpoint: 70,
            }}
          >
            <h1>
              Fee-free overdraft up to $200<sup>1</sup>
            </h1>

            <EnrollForm
              direction="mixed"
              ref={e => (inputsRef.current[2] = e as HTMLInputElement)}
            />

            <small>Already have an account?</small>
            <small>
              Learn how we collect and use your information by visiting our
              Privacy Policy
            </small>
            <small>
              Chime is a financial technology company, not a bank. Banking
              services provided by The Bancorp Bank, N.A. or Stride Bank, N.A.;
              Members FDIC
            </small>
          </BannerSection>,

          // 1.4
          <BannerSection
            key="/static/pages/home/web-04-overdraft-desktop.png"
            minHeight={550}
            img={{
              align: "cover",
              src: "/static/pages/home/web-04-overdraft-desktop.png",
              originalSize: [1072, 307],
              coverBreakpoint: 80,
            }}
          >
            <h1>
              Get paid up to 2 days early with direct deposit<sup>2</sup>
            </h1>

            <EnrollForm
              direction="mixed"
              ref={e => (inputsRef.current[3] = e as HTMLInputElement)}
            />

            <small>Already have an account?</small>
            <small>
              Learn how we collect and use your information by visiting our
              Privacy Policy
            </small>
            <small>
              Chime is a financial technology company, not a bank. Banking
              services provided by The Bancorp Bank, N.A. or Stride Bank, N.A.;
              Members FDIC
            </small>
          </BannerSection>,

          // 1.5
          <BannerSection
            key="/static/pages/home/web-05-no-fees-desktop.png"
            minHeight={550}
            img={{
              align: "cover",
              src: "/static/pages/home/web-05-no-fees-desktop.png",
              originalSize: [1072, 307],
              coverBreakpoint: 58,
            }}
          >
            <h1>No monthly fees</h1>

            <EnrollForm
              direction="mixed"
              ref={e => (inputsRef.current[4] = e as HTMLInputElement)}
            />

            <small>Already have an account?</small>
            <small>
              Learn how we collect and use your information by visiting our
              Privacy Policy
            </small>
            <small>
              Chime is a financial technology company, not a bank. Banking
              services provided by The Bancorp Bank, N.A. or Stride Bank, N.A.;
              Members FDIC
            </small>
          </BannerSection>,
        ]}
      />

      <BrandsLogoLine />

      {/* 2 */}
      <DualSection
        img={{
          float: "right",
          src: "/static/pages/home/spot-me-1.png",
          alt: "SpotMe 1",
          originalSize: [792, 526],
          width: {
            sm: 450,
            lg: 450,
          },
        }}
      >
        <h2>Overdraft fee-free with SpotMe</h2>

        <p>
          We&apos;ll spot you up to $200 on debit card purchases with no
          overdraft fees. Eligibility requirements apply.<sup>1</sup>
        </p>

        <HomePageComponents.LearnMoreButton />
      </DualSection>

      {/* 3 */}
      <DualSection
        img={{
          float: "left",
          src: "/static/pages/home/paid-early.png",
          alt: "Paid Early",
          originalSize: [713, 202],
          width: {
            sm: 490,
            md: 400,
          },
        }}
        backgroundColor={COLORS.GRAY_LIGHT}
      >
        <h2>Get paid early</h2>

        <p>
          Set up direct deposit and get your paycheck up to 2 days earlier than
          some of your co-workers!<sup>2</sup>
        </p>

        <HomePageComponents.LearnMoreButton />
      </DualSection>

      {/* 4 */}
      <DualSection
        img={{
          float: "right",
          src: "/static/pages/home/no-fees.png",
          alt: "No Fees",
          originalSize: [644, 322],
          width: {
            sm: 490,
          },
        }}
      >
        <h2>Say goodbye to monthly fees</h2>

        <p>
          No overdraft. No minimum balance. No monthly fees. No foreign
          transaction fees. 60,000+ fee-free ATMs<sup>3</sup> at stores you
          love, like Walgreens<sup>®</sup>, CVS<sup>®</sup>, 7-Eleven
          <sup>®</sup>, and Circle K. Out-of-network fees apply.
        </p>

        <HomePageComponents.LearnMoreButton />
      </DualSection>

      {/* 5 */}
      <DualSection
        img={{
          float: "left",
          src: "/static/pages/home/credit-builder.png",
          alt: "Credit Builder",
          originalSize: [826, 670],
          width: {
            sm: 340,
            md: 340,
          },
        }}
        backgroundColor={COLORS.GRAY_LIGHT}
      >
        <h2>A new way to build credit</h2>

        <p>
          Help increase your FICO Score<sup>®</sup> by an average of 30 points
          with our new secured credit card.<sup>4</sup> No interest, no annual
          fees, no credit check to apply. Eligibility requirements apply.
          <sup>5</sup>
        </p>

        <HomePageComponents.LearnMoreButton />

        <p>
          <small>
            Regular on-time payment history can have a positive impact on your
            credit score.
          </small>
        </p>
      </DualSection>

      {/* 6 */}
      <DualSection
        img={{
          float: "right",
          src: "/static/pages/home/pay-anyone-desktop.png",
          alt: "Pay Anyone Deskop",
          originalSize: [813, 916],
          width: {
            sm: 320,
            lg: 400,
          },
        }}
      >
        <h2>Pay anyone the fast, fee-free way</h2>

        <p>
          Pay friends and family fee-free, no matter what bank account they use.
          They can cash out instantly<sup>6</sup> and securely, no sign-up
          needed.
        </p>

        <HomePageComponents.LearnMoreButton />
      </DualSection>

      {/* 7 */}
      <DualSection
        img={{
          float: "left",
          src: "/static/pages/home/apy.png",
          alt: "APY",
          originalSize: [774, 474],
          width: {
            sm: 410,
            lg: 410,
          },
        }}
        backgroundColor={COLORS.GRAY_LIGHT}
      >
        <h2>Make your money grow fast</h2>

        <p>
          1.50% Annual Percentage Yield (APY).<sup>7</sup> Set money aside with
          Automatic Savings features. And never pay a fee on your Savings
          Account.
        </p>

        <HomePageComponents.LearnMoreButton />
      </DualSection>

      {/* 8 */}
      <DualSection
        img={{
          float: "right",
          src: "/static/pages/home/alerts.png",
          alt: "Alerts",
          originalSize: [734, 330],
          width: {
            sm: 490,
          },
        }}
      >
        <h2>Stay in control with alerts</h2>

        <p>
          You&apos;re always in-the-know with daily balance notifications and
          transaction alerts
        </p>

        <HomePageComponents.LearnMoreButton />
      </DualSection>

      {/* 9 */}
      <HomePageComponents.Section.Wrapper>
        <HomePageComponents.Section.Title>
          Security & support you can trust
        </HomePageComponents.Section.Title>

        <HomePageComponents.Section.Container>
          <HomePageComponents.Section.ImageWrapper>
            <Image
              src="/static/pages/home/lock.png"
              alt="Lock"
              layout="fixed"
              width={174}
              height={220}
            />
          </HomePageComponents.Section.ImageWrapper>

          <HomePageComponents.Section.TextContainer>
            <h3>Serious security</h3>

            <p>
              Chime uses secure processes to protect your information and help
              prevent unauthorized use
            </p>

            <h3>Privacy and protection</h3>

            <p>
              Your funds are FDIC insured up to $250,000 through The Bancorp
              Bank or Stride Bank, N.A., Members FDIC.
            </p>

            <h3>Anytime, anywhere support</h3>

            <p>
              If you need help, Chime&apos;s support channels are standing by
              24/7. Reach our friendly team by phone, email, in the app, or
              check out the Help Center.
            </p>
          </HomePageComponents.Section.TextContainer>
        </HomePageComponents.Section.Container>
      </HomePageComponents.Section.Wrapper>

      {/* 10 */}
      <DualSection
        img={{
          float: "right",
          src: "/static/pages/home/chime-reviews.png",
          alt: "Chime Reviews",
          originalSize: [884, 568],
          width: {
            sm: 465,
            lg: 465,
          },
        }}
        backgroundColor={COLORS.LIME_LIGHT}
      >
        <h2>Get started</h2>

        <p>
          Applying for an account is free and takes less than 2 minutes. It
          won&apos;t affect your credit score!
        </p>

        <EnrollForm direction="mixed" />
      </DualSection>
    </>
  );
};

HomePage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default HomePage;
