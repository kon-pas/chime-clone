import type { NextPage } from "next";

import Head from "next/head";

import Image from "next/image";

import { COLORS } from "@constants";

import DualArticle from "@components/elements/DualArticle";
import Button from "@components/elements/Button";
import IconSVG from "@components/elements/IconSVG";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Chime</title>
        <meta name="description" content="Chime clone home page" />
      </Head>

      {/* 1 */}
      <DualArticle.Container imageFloat="right">
        <DualArticle.Header>
          <h1>Overdraft fee-free with SpotMe</h1>
          <p>
            We&apos;ll spot you up to $200 on debit card purchases with no
            overdraft fees. Eligibility requirements apply.<sup>1</sup>
          </p>
          <Button>
            Learn more
            <IconSVG strokeWidth={3}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </IconSVG>
          </Button>
        </DualArticle.Header>

        <DualArticle.ImageWrapper>
          <Image
            src="https://www.chime.com/wp-content/uploads/2021/03/spot-me-1.png"
            alt="Overdraft fee-free with SpotMe"
            layout="responsive"
            width="792"
            height="526"
          />
        </DualArticle.ImageWrapper>
      </DualArticle.Container>

      {/* 2 */}
      <DualArticle.Container imageFloat="left">
        <DualArticle.Header>
          <h1>Get paid early</h1>
          <p>
            Set up direct deposit and get your paycheck up to 2 days earlier
            than some of your co-workers!<sup>2</sup>
          </p>
          <Button>
            Learn more
            <IconSVG strokeWidth={3}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </IconSVG>
          </Button>
        </DualArticle.Header>

        <DualArticle.ImageWrapper>
          <Image
            src="https://www.chime.com/wp-content/uploads/2020/03/paid-early.png"
            alt="Overdraft fee-free with SpotMe"
            layout="responsive"
            width="713"
            height="202"
          />
        </DualArticle.ImageWrapper>
      </DualArticle.Container>

      {/* 3 */}
      <DualArticle.Container imageFloat="right">
        <DualArticle.Header>
          <h1>Say goodbye to monthly fees</h1>
          <p>
            No overdraft. No minimum balance. No monthly fees. No foreign
            transaction fees. 60,000+ fee-free ATMs<sup>3</sup> at stores you
            love, like Walgreens<sup>®</sup>, CVS<sup>®</sup>, 7-Eleven
            <sup>®</sup>, and Circle K. Out-of-network fees apply.
          </p>
          <Button>
            Learn more
            <IconSVG strokeWidth={3}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </IconSVG>
          </Button>
        </DualArticle.Header>

        <DualArticle.ImageWrapper>
          <Image
            src="https://www.chime.com/wp-content/uploads/2020/03/no-fees.png"
            alt="Overdraft fee-free with SpotMe"
            layout="responsive"
            width="644"
            height="322"
          />
        </DualArticle.ImageWrapper>
      </DualArticle.Container>

      {/* 4 */}
      <DualArticle.Container imageFloat="left">
        <DualArticle.Header>
          <h1>A new way to build credit</h1>
          <p>
            Help increase your FICO Score<sup>®</sup> by an average of 30 points
            with our new secured credit card.<sup>4</sup> No interest, no annual
            fees, no credit check to apply. Eligibility requirements apply.
            <sup>5</sup>
          </p>
          <Button>
            Learn more
            <IconSVG strokeWidth={3}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </IconSVG>
          </Button>
        </DualArticle.Header>

        <DualArticle.ImageWrapper>
          <Image
            src="https://www.chime.com/wp-content/uploads/2021/03/CreditBuilder.png"
            alt="Overdraft fee-free with SpotMe"
            layout="responsive"
            width="826"
            height="670"
          />
        </DualArticle.ImageWrapper>
      </DualArticle.Container>

      {/* 5 */}
      <DualArticle.Container imageFloat="left">
        <DualArticle.Header>
          <h1>Pay anyone the fast, fee-free way</h1>
          <p>
            Pay friends and family fee-free, no matter what bank account they
            use. They can cash out instantly<sup>6</sup> and securely, no
            sign-up needed.
          </p>
          <Button>
            Learn more
            <IconSVG strokeWidth={3}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </IconSVG>
          </Button>
        </DualArticle.Header>

        <DualArticle.ImageWrapper>
          <Image
            src="https://www.chime.com/wp-content/uploads/2021/07/pay-anyone-desktop.png"
            alt="Overdraft fee-free with SpotMe"
            layout="responsive"
            width="831"
            height="916"
          />
        </DualArticle.ImageWrapper>
      </DualArticle.Container>

      {/* 6 */}
      <DualArticle.Container imageFloat="right">
        <DualArticle.Header>
          <h1>Make your money grow fast</h1>
          <p>
            1.50% Annual Percentage Yield (APY).<sup>7</sup> Set money aside
            with Automatic Savings features. And never pay a fee on your Savings
            Account.
          </p>
          <Button>
            Learn more
            <IconSVG strokeWidth={3}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </IconSVG>
          </Button>
        </DualArticle.Header>

        <DualArticle.ImageWrapper>
          <Image
            src="https://www.chime.com/wp-content/uploads/2022/08/APY.png"
            alt="Overdraft fee-free with SpotMe"
            layout="responsive"
            width="774"
            height="474"
          />
        </DualArticle.ImageWrapper>
      </DualArticle.Container>

      {/* 7 */}
      <DualArticle.Container imageFloat="left">
        <DualArticle.Header>
          <h1>Stay in control with alerts</h1>
          <p>
            You&apos;re always in-the-know with daily balance notifications and
            transaction alerts
          </p>
          <Button>
            Learn more
            <IconSVG strokeWidth={3}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </IconSVG>
          </Button>
        </DualArticle.Header>

        <DualArticle.ImageWrapper>
          <Image
            src="https://www.chime.com/wp-content/uploads/2020/03/alerts.png"
            alt="Overdraft fee-free with SpotMe"
            layout="responsive"
            width="734"
            height="330"
          />
        </DualArticle.ImageWrapper>
      </DualArticle.Container>
    </div>
  );
};

export default Home;
