import { FaqPageComponents } from "@components/pages";

import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@types";

import Head from "next/head";
import { COLORS } from "@constants";
import { MainLayout } from "@components/composition";
import { BannerSection, MonoSection } from "@components/sections";
import { Disclosure, ContentContainer, EnrollForm } from "@components/elements";

const FaqPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>
          Frequently Asked Questions | How to Get Started with Chime
        </title>
        <meta
          name="description"
          content="Chime Clone Frequently Asked Questions"
        />
      </Head>

      {/* 1 */}
      <BannerSection
        img={{
          align: "center",
          src: "/static/pages/faq/control.png",
          alt: "Calendar",
          originalSize: [1400, 835],
          width: {
            sm: 586,
            md: 365,
            lg: 485,
          },
        }}
      >
        <h1>
          Banking that has your back<sup>™</sup>
        </h1>

        <p>
          Get paid up to 2 days early with direct deposit.<sup>1</sup> Say
          goodbye to hidden bank fees<sup>2</sup>. Grow your savings,
          automatically.
        </p>

        <EnrollForm label="Apply Now" />

        <small>Already have an account?</small>
        <small>
          Learn how we collect and use your information by visiting our Privacy
          Policy
        </small>
      </BannerSection>

      {/* 2 */}
      <FaqPageComponents.Section>
        <ContentContainer>
          <FaqPageComponents.Heading>
            Frequently Asked Questions
          </FaqPageComponents.Heading>

          <Disclosure label="What is Chime?">
            <p>
              At Chime, we&apos;ve created a new approach to online banking that
              doesn&apos;t rely on fees<sup>2</sup>, gets you your paycheck up
              to 2 days early with direct deposit<sup>1</sup>, and helps you
              grow your savings automatically. When you open a bank account
              through Chime, you get a Visa Debit Card<sup>®</sup> and a
              Checking Account that can be managed entirely from your
              smartphone, plus an optional Savings Account that helps you grow
              your savings automatically! The Chime mobile banking app is
              available on both Android and iOS.
            </p>

            <p>
              Chime is a financial technology company, not a bank. Banking
              services provided by The Bancorp Bank or Stride Bank, N.A.;
              Members FDIC.
            </p>
          </Disclosure>

          <Disclosure label="What is Chime's mission?">
            <p>
              Our mission is to make financial peace of mind a reality for
              everyone. We&apos;re doing that by changing the way people feel
              about banking. Chime&apos;s business was built on the principle of
              protecting our members and making managing your money easy.
              We&apos;ll never profit from your misfortune or mistakes and
              everything we build is focused on improving our member&apos;s
              lives.
            </p>
          </Disclosure>

          <Disclosure label="How does Chime make money?">
            <p>
              Chime makes money from the interchange fee charged on card
              transactions. Every time you use your Chime Visa® Debit Card or
              Credit Builder Secured Credit Card for purchases and paying bills,
              Visa processes the transaction and charges an interchange fee to
              merchants for the service. Chime receives a portion of this fee.
              This is how Chime can continue building new and better products
              that help members get the most from their money.
            </p>
          </Disclosure>

          <Disclosure label="Who can use Chime?">
            <p>
              U.S. Citizens 18 years and older are welcome to apply! While Chime
              cards work all over the world, currently we can only offer
              accounts to members with a valid SSN, living in the United States
              and District of Columbia.
            </p>
          </Disclosure>

          <Disclosure label="Does Chime charge any fees?">
            <p>
              We don&apos;t believe in unnecessary fees or profiting from our
              members&apos; misfortune. We have no fees to sign up, no
              overdraft, no monthly or service fees, no minimum balance fees, no
              transaction fees, and no card replacement fees either. We do
              charge one fee ($2.50) when you get cash from either an over the
              counter withdrawal, or an out-of-network ATM that is not part of
              Chime&apos;s fee-free network of 60,000+ ATMs
            </p>

            <p>
              <i>
                Please note that third-party services, such as money transfer
                services used to deposit funds or out of network ATM used to
                withdraw funds to your Chime Checking Account may impose their
                own fees per transaction.
              </i>
            </p>
          </Disclosure>

          <Disclosure label="Does Chime have Fee-Free Overdrafts?">
            <p>
              Yes! Chime&apos;s SpotMe feature lets you make debit card
              purchases and cash withdrawals that overdraw your account with no
              overdraft fees.<sup>3</sup> Limits start at $20 and can be
              increased up to $200. We&apos;ll spot you when you need that
              little extra cushion to cover an expense. Learn more here!
            </p>
          </Disclosure>

          <Disclosure label="What type of cards does Chime offer?">
            <p>
              When you open a Chime Checking Account you get a Chime Debit Card
              that can be used at any merchant that accepts Visa. Your Chime
              Debit Card can also be used with mobile-payment providers such as
              Apple PayTM, Google PayTM or Samsung PayTM. Other features our
              members love about our Chime Visa Debit Card are instant
              transaction notifications anytime your card is swiped, the ability
              to instantly block your card and order a replacement Debit Card
              all from within the Chime mobile app.
            </p>

            <p>
              The Chime Credit Builder Visa<sup>®</sup> Credit Card is our no
              fee, no interest, secured credit card that helps you build your
              credit. Unlike traditional credit cards, Credit Builder helps you
              build credit with no fees and no interest. There&apos;s also no
              credit check to apply. The money you move into Credit
              Builder&apos;s secured account is the amount you can spend on the
              card. Unlike other secured credit cards, that money can be used to
              pay off your monthly balances. Since Credit Builder doesn&apos;t
              have a pre-set limit, spending up to the amount you added
              won&apos;t contribute to a high-utilization record on your credit
              history. Learn more about how Credit Builder works.
            </p>
          </Disclosure>

          <Disclosure label="When do I receive my Chime Visa Debit Card after I open a Chime Checking Account?">
            <p>
              After you open a Checking Account, we get started on personalizing
              your new Chime Visa Debit Card. Your Chime Visa Debit Card is
              usually placed in the mail within one (1) business day after you
              open your Checking Account. It can take 5 to 10 business days for
              your Chime Visa Debit Card to arrive at your home address.
            </p>

            <p>
              If you don&apos;t have your Chime Visa Debit Card within 10
              business days after opening your Checking Account, please contact
              our Member Services team at: support@chime.com
            </p>
          </Disclosure>

          <Disclosure label="Is Chime a real bank?">
            <p>
              Chime is not a bank. Chime is a financial technology company that
              offers banking services provided by The Bancorp Bank or Stride
              Bank, N.A.; Members FDIC. Chime members can have a Checking
              Account with an optional Savings Account, and can grow their
              credit history by applying for a secured Chime Credit Builder Visa
              <sup>®</sup> Credit Card &ndash; all while enjoying the benefits
              of online banking and mobile banking. Eligibility requirements
              apply for Credit Builder card.
            </p>
          </Disclosure>

          <Disclosure label="Is Chime a real bank or prepaid card?">
            <p>
              Chime is a financial technology company, not a bank. Banking
              services are provided by The Bancorp Bank or Stride Bank, N.A.;
              Members FDIC. Chime is also not a prepaid card. Through its bank
              partners, Chime offers a full-service checking account with a
              Chime Visa<sup>®</sup> Debit Card for spending and using at
              60,000+ fee-free in-network ATMs. Out of Network ATM fees apply.
              See Chime.com for more details.
            </p>
          </Disclosure>
        </ContentContainer>
      </FaqPageComponents.Section>

      {/* 3 */}
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

FaqPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default FaqPage;
