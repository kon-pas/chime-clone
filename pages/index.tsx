import * as Styled from "@styles/pages/home";

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { COLORS } from "@constants";

import DualArticle from "@components/elements/DualArticle";
import LearnMoreButton from "@components/pages/home/LearnMoreButton";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Chime</title>
        <meta name="description" content="Chime clone home page" />
      </Head>

      {/* 1 */}
      <DualArticle
        img={{
          src: "https://www.chime.com/wp-content/uploads/2021/03/spot-me-1.png",
          alt: "SpotMe 1",
          width: 792,
          height: 526,
          float: "right",
        }}
      >
        <h1>Overdraft fee-free with SpotMe</h1>
        <p>
          We&apos;ll spot you up to $200 on debit card purchases with no
          overdraft fees. Eligibility requirements apply.<sup>1</sup>
        </p>
        <LearnMoreButton />
      </DualArticle>

      {/* 2 */}
      <DualArticle
        img={{
          src: "https://www.chime.com/wp-content/uploads/2020/03/paid-early.png",
          alt: "Paid Early",
          width: 713,
          height: 202,
        }}
        backgroundColor={COLORS.GRAY_LIGHT}
      >
        <h1>Get paid early</h1>
        <p>
          Set up direct deposit and get your paycheck up to 2 days earlier than
          some of your co-workers!<sup>2</sup>
        </p>
        <LearnMoreButton />
      </DualArticle>

      {/* 3 */}
      <DualArticle
        img={{
          src: "https://www.chime.com/wp-content/uploads/2020/03/no-fees.png",
          alt: "No Fees",
          width: 644,
          height: 322,
          float: "right",
        }}
      >
        <h1>Say goodbye to monthly fees</h1>
        <p>
          No overdraft. No minimum balance. No monthly fees. No foreign
          transaction fees. 60,000+ fee-free ATMs<sup>3</sup> at stores you
          love, like Walgreens<sup>®</sup>, CVS<sup>®</sup>, 7-Eleven
          <sup>®</sup>, and Circle K. Out-of-network fees apply.
        </p>
        <LearnMoreButton />
      </DualArticle>

      {/* 4 */}
      <DualArticle
        img={{
          src: "https://www.chime.com/wp-content/uploads/2021/03/CreditBuilder.png",
          alt: "Credit Builder",
          width: 826,
          height: 670,
        }}
        backgroundColor={COLORS.GRAY_LIGHT}
      >
        <h1>A new way to build credit</h1>
        <p>
          Help increase your FICO Score<sup>®</sup> by an average of 30 points
          with our new secured credit card.<sup>4</sup> No interest, no annual
          fees, no credit check to apply. Eligibility requirements apply.
          <sup>5</sup>
        </p>
        <LearnMoreButton />
        <p>
          <small>
            Regular on-time payment history can have a positive impact on your
            credit score.
          </small>
        </p>
      </DualArticle>

      {/* 5 */}
      <DualArticle
        img={{
          src: "https://www.chime.com/wp-content/uploads/2021/07/pay-anyone-desktop.png",
          alt: "Pay Anyone Deskop",
          width: 813,
          height: 916,
          float: "right",
        }}
      >
        <h1>Pay anyone the fast, fee-free way</h1>
        <p>
          Pay friends and family fee-free, no matter what bank account they use.
          They can cash out instantly<sup>6</sup> and securely, no sign-up
          needed.
        </p>
        <LearnMoreButton />
      </DualArticle>

      {/* 6 */}
      <DualArticle
        img={{
          src: "https://www.chime.com/wp-content/uploads/2022/08/APY.png",
          alt: "APY",
          width: 774,
          height: 474,
        }}
        backgroundColor={COLORS.GRAY_LIGHT}
      >
        <h1>Make your money grow fast</h1>
        <p>
          1.50% Annual Percentage Yield (APY).<sup>7</sup> Set money aside with
          Automatic Savings features. And never pay a fee on your Savings
          Account.
        </p>
        <LearnMoreButton />
      </DualArticle>

      {/* 7 */}
      <DualArticle
        img={{
          src: "https://www.chime.com/wp-content/uploads/2020/03/alerts.png",
          alt: "Alerts",
          width: 734,
          height: 330,
          float: "right",
        }}
      >
        <h1>Stay in control with alerts</h1>
        <p>
          You&apos;re always in-the-know with daily balance notifications and
          transaction alerts
        </p>
        <LearnMoreButton />
      </DualArticle>

      {/* 8 */}
      <Styled.Section.Wrapper>
        <Styled.Section.Title>
          Security & support you can trust
        </Styled.Section.Title>

        <Styled.Section.Container>
          <Styled.Section.ImageWrapper>
            <Image
              src="https://www.chime.com/wp-content/uploads/2020/03/lock.png"
              alt="Lock"
              width={174}
              height={220}
            />
          </Styled.Section.ImageWrapper>

          <Styled.Section.TextWrapper>
            <h2>Serious security</h2>
            <p>
              Chime uses secure processes to protect your information and help
              prevent unauthorized use
            </p>

            <h2>Privacy and protection</h2>
            <p>
              Your funds are FDIC insured up to $250,000 through The Bancorp
              Bank or Stride Bank, N.A., Members FDIC.
            </p>

            <h2>Anytime, anywhere support</h2>
            <p>
              If you need help, Chime&apos;s support channels are standing by
              24/7. Reach our friendly team by phone, email, in the app, or
              check out the Help Center.
            </p>
          </Styled.Section.TextWrapper>
        </Styled.Section.Container>
      </Styled.Section.Wrapper>

      {/* 9 */}
    </div>
  );
};

export default Home;
