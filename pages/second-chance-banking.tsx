import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@pages/_app";

import Head from "next/head";
import { COLORS } from "@constants";
import { MainLayout } from "@components/composition";
import { MonoSection, DualSection, BannerSection } from "@components/sections";

const SecondChangeBankingPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        z<title>Second Change Banking: Open an Account Today | Chime</title>
        <meta name="description" content="Chime Clone Second Change Banking" />
      </Head>

      {/* 1 */}
      <BannerSection
        key="/static/pages/second-chance-banking/chime-app-and-card.png"
        img={{
          align: "center",
          src: "/static/pages/second-chance-banking/chime-app-and-card.png",
          alt: "Shield",
          originalSize: [964, 1024],
          width: {
            sm: 330,
            md: 365,
            lg: 485,
          },
        }}
      >
        <small>Chime Second Chance Banking</small>

        <h1>Banking the way it should be.</h1>

        <p>
          An award-winning mobile banking app and debit card. Applying takes
          less than 2 minutes! No credit check. No ChexSystems.
        </p>
      </BannerSection>

      {/* 2 */}
      <MonoSection backgroundColor={COLORS.GRAY_LIGHT}>
        <h2>An award-winning mobile banking app and debit card.</h2>

        {/* List Here */}
      </MonoSection>

      {/* 3 */}
      <MonoSection backgroundColor={COLORS.WHITE} textAlign="start" width={700}>
        <h2>
          Bad Credit Is No Longer a Dealbreaker for a New Traditional Bank
          Account
        </h2>

        <p>
          In many situations, it can be hard to find banks that don&apos;t use
          ChexSystems. If you even have one minor blemish on your report with a
          consumer reporting agency such as ChexSystems, banking isn&apos;t
          always easy to access. Many traditional banks may deny you access to a
          checking account with bad credit, no matter your net worth. It can be
          pretty tough to keep track of your finances without a checking
          account.
        </p>

        <p>
          If you&apos;ve been denied a traditional bank account because of bad
          credit, Chime is here to help with a long list of unique features that
          provide a great second chance banking option. Unlike traditional bank
          accounts, Chime is built to help you take control of your financial
          health. We help you on your path to rebuilding your financial life by
          offering a bank account that doesn&apos;t use reports such as those
          furnished by ChexSystems and has no monthly fees.
        </p>
      </MonoSection>

      {/* 4 */}
      <MonoSection backgroundColor={COLORS.LIME_MEDIUM}>
        <h2>Get Started Today</h2>

        <p>
          Applying for an account is free and takes less than 2 minutes with no
          impact to your credit score.
        </p>
      </MonoSection>

      {/* 5 */}
      <MonoSection backgroundColor={COLORS.WHITE} textAlign="start" width={700}>
        <h1>Finding a Bank Account with No Credit Reporting Agencies</h1>

        <p>
          Credit reporting agencies (CRA), like ChexSystems and others, may
          provide reports that effectively blacklist millions of Americans for
          credit mistakes, even from years back which may feel like a punishment
          to some. Many traditional banks will turn you away if you have even
          one CRA report, which means you have little opportunity to rebuild
          your credit score. Many financial institutions rely on CRAs to provide
          early warnings based on past mistakes in your banking history.
        </p>
      </MonoSection>

      {/* 6 */}
      <MonoSection
        backgroundColor={COLORS.GRAY_LIGHT}
        textAlign="start"
        width={700}
      >
        <h2>Automatic Savings Builds Positive Financial Habits</h2>

        <p>
          The road to financial health starts with building better money habits
          such as saving money every month. Most Americans have less than $500
          in savings and are unable to afford even the most basic medical
          emergency. It&apos;s time to change this and let technology do the
          heavy lifting through automation. Financial automation helps you
          create a savings plan that helps you grow your savings by doing the
          hard work for you. The best part: you don&apos;t even have to think
          about it.
        </p>

        <p>
          Chime&apos;s Automatic Savings is one tool that Chime provides to help
          you grow your savings automatically.
        </p>

        <ul>
          <li>
            Every time you use your Chime debit card, we round up the
            transaction in your Checking Account to the nearest dollar and and
            transfer the remainder into your Savings Account. It&apos;s an easy
            way to start building your savings with every swipe.
          </li>

          <li>
            Save every time you get paid with direct deposit. When you set up
            direct deposit with Chime, you can automatically deduct a percentage
            of every direct deposit and transfer it to your Savings Account.
          </li>
        </ul>
      </MonoSection>

      {/* 7 */}
      <DualSection
        img={{
          float: "right",
          src: "/static/pages/second-chance-banking/control.png",
          alt: "Chime Control",
          originalSize: [1400, 835],
          width: {
            sm: 503,
            md: 365,
            lg: 570,
          },
        }}
      >
        <h2>Chime is a Second Chance Banking Option with No Monthly Fees</h2>

        <p>
          Many standard checking accounts and savings accounts can be expensive
          just to maintain each month. Traditional accounts sometimes charge
          high and unnecessary banking fees that can cause additional monetary
          challenges to people with credit issues. Minimum balance requirements
          add yet another hurdle. Add in monthly maintenance fees, rising ATM
          fees, and expensive overdraft fees and banking can be a complete
          non-starter.
        </p>

        <p>
          Chime offers a second chance bank account with no unnecessary fees.
          Keep more of your hard-earned money and sign up for a Chime account:
        </p>

        <ul>
          <li>60,000+ fee-free ATMs</li>

          <li>No overdraft fees</li>

          <li>No monthly maintenance charges</li>

          <li>No foreign transaction fees</li>

          <li>No minimum balance fees – ever</li>
        </ul>
      </DualSection>

      {/* 8 */}
      <MonoSection
        backgroundColor={COLORS.GRAY_LIGHT}
        textAlign="start"
        width={700}
      >
        <h2>An Alternative to a Prepaid Debit Card</h2>

        <p>
          Prepaid debit cards are cards that only let you access funds that you
          load onto them before spending. Prepaid debit cards are different from
          debit cards in that they are not linked to a spending or checking
          account. Many people turn to prepaid debit cards to help them control
          their spending or due to necessity if they are locked out of banking
          services due to Credit Reporting Agency reports. While prepaid debit
          cards may be convenient for some, these cards do have significant
          limitations that are important to consider when evaluating your
          options.
        </p>

        <p>
          The first limitation comes in the form of prepaid debit card fees. For
          example, you&apos;ll often be charged fees for an initial setup,
          monthly maintenance, reloading your card, ATM use, and more. Most
          prepaid cards are not required to offer fraud protection like a
          typical debit card connected to a bank account. If your card is
          stolen, the issuer is not required to replace the funds.
        </p>

        <p>
          When evaluating prepaid debit cards, it is wise to consider prepaid
          alternatives. Chime is one of the best prepaid debit card alternatives
          available on the market. Here&apos;s why:
        </p>

        <ul>
          <li>
            No monthly fees. No minimum balance requirement. No overdraft.
          </li>

          <li>
            Chime provides both a Checking Account and a Savings Account along
            with a Visa® Debit card.
          </li>

          <li>
            An award-winning mobile app that allows you to manage your money
            from anywhere, send checks, transfer money to friends, and more.
          </li>
        </ul>
      </MonoSection>

      {/* 9 */}
      <MonoSection backgroundColor={COLORS.WHITE} textAlign="start" width={700}>
        <h2>A Second Chance to Rebuild Your Financial Health</h2>

        <p>At Chime, we&apos;re changing the way people feel about banking.</p>

        <p>
          We are dedicated to helping our members lead healthy financial lives.
          That&apos;s why we offer an award-winning mobile banking app that
          doesn&apos;t charge monthly fees, gives members early access to their
          paychecks * with direct deposit, and helps them save money
          automatically. Hundreds of thousands of people use the Chime Visa®
          Debit Card to make purchases, track spending, save for the future, and
          more.
        </p>

        <p>
          If you have experienced issues with credit debt or bad credit history,
          we want to help you get back on track toward a healthy financial
          future. That starts with finding the right partner who will never
          charge you fees and provides tools to help you start building better
          financial habits. We hope that Chime can be your partner in this
          journey to financial health.
        </p>
      </MonoSection>

      {/* 10 */}
      <MonoSection
        backgroundColor={COLORS.GRAY_LIGHT}
        textAlign="start"
        width={700}
      >
        <h2>
          Don&apos;t Let Overdraft Fees Hurt Your Financial Health and Credit
          Score
        </h2>

        <p>
          You may be very well aware of overdraft fees if you have ever used a
          traditional bank account. Most overdrafts fees are incurred when you
          don&apos;t have enough money in your bank account to pay for a
          purchase and the bank will pay for the transaction in exchange for a
          fee. Overdraft protection may help some people in a pinch, but the
          average $34 overdraft fee is a bit excessive compared to the simple,
          inexpensive, and largely computerized process of either returning a
          check or notifying the customer that there is an overdraft and that he
          needs to make a deposit to cover it. Let&apos;s break it down.
        </p>

        <ul>
          <li>
            Banks in the United States made over $34 Billion dollars in bank
            fees in 2017 alone.
          </li>

          <li>
            Americans households pay an average of $329 in bank fees every year
            – Bank Fee Finder 2017
          </li>

          <li>$250 dollars of those fees consist of overdraft fees</li>
        </ul>

        <p>
          Building a spending plan and working budget allows you to live within
          your means and spend only what you can afford, which will help ensure
          you never get to a negative balance. You may also want to consider
          banking options such as Chime which never charges unnecessary fees.
        </p>
      </MonoSection>

      {/* 11 */}
      <MonoSection backgroundColor={COLORS.WHITE} textAlign="start" width={700}>
        <h2>Ready for Your Second Chance?</h2>

        <p>
          AChime is a great second chance banking option to help you take back
          control of your finances. Apply today if you are ready to:
        </p>

        <ul>
          <li>
            Say goodbye to monthly fees, overdraft fees, minimum balance
            requirements, and foreign transaction fees.
          </li>

          <li>
            Get your paycheck up to 2 days earlier with direct deposit* than you
            would with traditional banking institutions.
          </li>

          <li>
            Grow your savings automatically with debit card round-ups and saving
            a percentage with every direct deposit.
          </li>

          <li>
            Make, purchase, and track spending, pay bills, send checks, and
            manage all of your financial needs from an award winning mobile
            banking app.
          </li>
        </ul>
      </MonoSection>

      {/* 12 */}
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

SecondChangeBankingPage.getLayout = (page: ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

export default SecondChangeBankingPage;
