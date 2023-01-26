import { ChimeFinancialComponents } from "@components/pages";

import type { ReactElement } from "react";
import type { NextPageWithLayout } from "@types";

import Image from "next/image";
import Head from "next/head";

import { Disclosure } from "@components/elements";
import { MainLayout } from "@components/composition";

const FaqPage: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Chime Financial, Inc. | Chime</title>
        <meta name="description" content="Chime Clone Financial Inc" />
      </Head>

      {/* 1 */}
      <ChimeFinancialComponents.Banner.Container>
        <ChimeFinancialComponents.Banner.BackgroundColor />

        <ChimeFinancialComponents.Banner.Title>
          Get to know Chime
        </ChimeFinancialComponents.Banner.Title>

        <ChimeFinancialComponents.Banner.ImageWrapper>
          <Image
            src="/static/pages/chime-financial/community-hero.png"
            alt="Community Hero"
            width={785}
            height={400}
          />
        </ChimeFinancialComponents.Banner.ImageWrapper>
      </ChimeFinancialComponents.Banner.Container>

      {/* 2 */}
      <ChimeFinancialComponents.Section.Container>
        <ChimeFinancialComponents.Section.Title>
          Financial peace of mind
        </ChimeFinancialComponents.Section.Title>

        <ChimeFinancialComponents.Section.Content>
          <Disclosure label="Helpful, easy, free" opened>
            <p>
              Chime is a financial technology company founded on a simple idea:
              everyday banking and payment services should be helpful, easy, and
              free. Our mission is to help our members &ndash; everyday people
              who aren&apos;t well-served by traditional banks &ndash; achieve
              financial peace of mind, together.
            </p>

            <br />

            <p>
              Now more than ever, people are looking for an alternative to
              fee-based banking that&apos;s aligned with their best interests.
              Chime offers everyday consumers that choice. We helped bring
              features to market that were unavailable to most consumers just a
              few years ago &ndash; including early access to paychecks,
              accounts with no monthly fees, and fee-free overdrafts up to $200.
              We also offer a secured credit card that enables people to safely
              build credit. And with 60,000+ fee-free ATMs nationwide &ndash; a
              larger network than the four biggest U.S. banks combined &ndash;
              Chime members never have to look far to access cash. Millions of
              people trust Chime every day.
            </p>
          </Disclosure>

          <Disclosure label="Aligned interests">
            <p>
              A decade ago, in the wake of the global financial crisis, Chime
              founders Chris Britt and Ryan King saw a traditional banking
              system benefitting from people&apos;s misfortune by charging
              billions of dollars in punitive fees each year. In 2012 they
              founded Chime, determined to build a company that would give
              people more control of their financial lives.
            </p>

            <br />

            <p>
              Chime&apos;s business reflects that commitment. Instead of fees
              and charges, our revenue comes mainly from transactions, the small
              amount we earn from Visa when a member uses their Chime card. In
              other words, we aim to profit with our members, not from them.
            </p>
          </Disclosure>
        </ChimeFinancialComponents.Section.Content>
      </ChimeFinancialComponents.Section.Container>

      {/* 3 */}
      <ChimeFinancialComponents.Section.Container>
        <ChimeFinancialComponents.Section.Title>
          Member-obsessed
        </ChimeFinancialComponents.Section.Title>

        <ChimeFinancialComponents.Section.Content>
          <Disclosure label="A new, customer-focused approach" opened>
            <p>
              Chime is different from other financial services companies. We
              obsess over the needs of our members and live by a set of Core
              Values that guide our actions. We sweat the details of their
              experience and always have their back. The result: nearly half of
              Chime&apos;s new signups come from word of mouth and referrals.
              It&apos;s all part of what we call being “member-obsessed.”
            </p>

            <br />

            <p>
              Who are Chime members? They&apos;re mainstream consumers, your
              friends, coworkers and neighbors — everyday people who often
              struggle with the high cost and barriers to entry in traditional
              financial services. This includes young people just entering the
              job market, women, people of color, and those most affected by
              economic downturns.
            </p>
          </Disclosure>

          <Disclosure label="Chime Values">
            <p>
              💚 <b>Be member-obsessed</b>
              <br />
              We are guided by a deep understanding of our members&apos; needs
              and a devotion to meeting those needs at every step. We practice
              empathy in everything we do.
            </p>

            <br />

            <p>
              🙃 <b> Be human</b>
              <br />
              We keep it real. We build trust and connection with our members by
              making them laugh, feel understood, and get inspired.
            </p>

            <br />

            <p>
              🚀 <b> Be bold</b>
              <br />
              We dream big. We set audacious goals, tackle the hard stuff, and
              do things that no bank has done before. We see a broken industry
              and believe in our ability to change it forever.
            </p>

            <br />

            <p>
              🎯 <b> Simplify</b>
              <br />
              We start with the simplest solution and only add to it if
              necessary. We are famously practical and focused. Our motto is “Do
              Less. Faster. More often.”
            </p>

            <br />

            <p>
              📈 <b>Make it happen</b>
              <br />
              We measure the impact of our work and push hard to hit our goals.
              We find ways around roadblocks. We hold each other accountable to
              a high bar for performance.
            </p>

            <br />

            <p>
              🎖 <b>Respect the rules</b>
              <br />
              We take seriously our obligations to regulators, partners, and the
              public. We move fast and push for changes without cutting corners.
              We risk failure if we ever break the regs.
            </p>

            <br />

            <p>
              👯 <b>Team up</b>
              <br />
              We know great work isn&apos;t done alone. We organize into teams
              that leverage the different strengths we each bring. We are
              stronger when we have each other&apos;s backs.
            </p>

            <br />

            <p>
              🙋🏽‍♀️ <b>Chime in</b>
              <br />
              As owners, we have an obligation to speak up. We share our ideas,
              ask hard questions, and give candid feedback. When others chime
              in, we value what they have to say.
            </p>

            <br />

            <p>
              A decade ago, in the wake of the global financial crisis, Chime
              founders Chris Britt and Ryan King saw a traditional banking
              system benefitting from people&apos;s misfortune by charging
              billions of dollars in punitive fees each year. In 2012 they
              founded Chime, determined to build a company that would give
              people more control of their financial lives.
            </p>

            <br />

            <p>
              Chime&apos;s business reflects that commitment. Instead of fees
              and charges, our revenue comes mainly from transactions, the small
              amount we earn from Visa when a member uses their Chime card. In
              other words, we aim to profit with our members, not from them.
            </p>
          </Disclosure>

          <Disclosure label="Showing up">
            <p>
              As the COVID-19 pandemic hit, Chime saw the opportunity to make a
              difference and got right to work. We were able to give people
              early access to critical stimulus and unemployment benefit
              payments, often up to five days before traditional banks. This
              helped our members pay the rent, support their families and put
              gas in their cars so they could get to work. In total, Chime
              delivered early access to more than $6.5 billion of
              pandemic-related benefits to our members.
            </p>
          </Disclosure>
        </ChimeFinancialComponents.Section.Content>
      </ChimeFinancialComponents.Section.Container>

      {/* 4 */}
      <ChimeFinancialComponents.Section.Container>
        <ChimeFinancialComponents.Section.Title>
          Playing by the rules
        </ChimeFinancialComponents.Section.Title>

        <ChimeFinancialComponents.Section.Content>
          <Disclosure label="More choice, more innovation" opened>
            <p>
              Chime is not a bank. Instead, we partner with regional banks to
              design and deliver easy-to-use financial products for consumers.
              All of our members&apos; account balances are safely held at
              regulated, FDIC-insured banks, and our products comply with all
              applicable banking laws and regulations. day.
            </p>

            <br />

            <p>
              Our innovations have created more choice for consumers and proven
              that our partner bank approach creates a more competitive
              financial services industry. We&apos;re proud of the positive
              impact we&apos;ve had.
            </p>

            <br />

            <p>
              As a technology company, Chime&apos;s expertise and platform
              investments help our bank partners better serve and expand their
              customer bases. This helps make them more competitive in an era of
              increasing industry consolidation, with the top few banks getting
              larger everyday at their expense.
            </p>
          </Disclosure>

          <Disclosure label="Transparent, trusted">
            <p>
              Nothing is more important at Chime than safeguarding members&apos;
              money and personal information, and we fully comply with the rules
              and regulations put in place to protect consumers. In addition,
              Chime has made significant investments in people and technology to
              ensure we&apos;re a responsible participant within the payments
              and finance ecosystem. That focus allows us to meet our
              commitments to federal and state regulators, our partner banks,
              and most importantly, our members.
            </p>

            <br />

            <p>
              Chime has built a world-class team to manage risk, including
              experts in cybersecurity, financial fraud, anti-money laundering,
              analytics, underwriting, and machine learning. Our banking
              partners audit our work and we work closely with them to review
              and respond to all consumer complaints.
            </p>
          </Disclosure>

          <Disclosure label="Regulated">
            <p>
              Chime&apos;s work is supervised by our partner banks,{" "}
              <b>Bancorp Bank</b> and <b>Stride Bank</b>, as well as their
              regulators, the Federal Deposit Insurance Corporation (FDIC) and
              the Office of the Comptroller of the Currency (OCC). At the
              federal level, Chime is also subject to the jurisdiction of the
              Consumer Financial Protection Bureau (CFPB), the Federal Trade
              Commission (FTC), and the Department of Justice (DOJ). At the
              state level, Chime is regulated by agencies focused on consumer
              welfare and financial services.
            </p>

            <br />

            <p>
              Chime’s financial products are always designed in coordination
              with our bank partners.
            </p>
          </Disclosure>
        </ChimeFinancialComponents.Section.Content>
      </ChimeFinancialComponents.Section.Container>

      {/* 5 */}
      <ChimeFinancialComponents.Section.Container>
        <ChimeFinancialComponents.Section.Title>
          Making a difference
        </ChimeFinancialComponents.Section.Title>

        <ChimeFinancialComponents.Section.Content>
          <Disclosure label="Building a foundation" opened>
            <p>
              Chime has members in all 50 states, each experiencing their own
              financial triumphs and challenges. We strive to be a resource for
              families, help them stay on top of their finances, avoid
              unnecessary fees and create a solid financial foundation.
            </p>
          </Disclosure>

          <Disclosure label="Creating impact">
            <p>
              Chime distributed more than $600,000 in grants in 2020 to support
              partner organizations, social causes, and COVID-19 and disaster
              relief. This included multi-year grants, unrestricted funding,
              employee matched donations, and grants through our Employee
              Resource Groups (ERGs).
            </p>

            <br />

            <p>
              Chime backs organizations and causes that work for racial and
              gender-based equity, with the goal of uplifting underrepresented
              groups of people. In the past year, we have given grants to the
              Equal Justice Initiative, Black Girls Code, 100 Black Men, The
              Asian American Foundation, Asian Pacific Fund, and other
              organizations that focus on racial equity. We also provide a
              budget to each of our seven ERGs so they can support nonprofits
              and initiatives they are passionate about.
            </p>

            <br />

            <p>
              As a Pledge 1% member, Chime employees can use 1% of their work
              time to volunteer and give back. Chimers can create their own
              volunteer activities and or choose from existing opportunities
              through VolunteerMatch.
            </p>
          </Disclosure>

          <Disclosure label="Passionate people">
            <p>
              Chime is headquartered in San Francisco, with offices in Chicago
              and Vancouver. Although Chimers come from many different
              backgrounds, they have one big thing in common: an abiding passion
              for our mission.
            </p>

            <br />

            <p>
              Chimers are engineers and customer service professionals,
              designers and data scientists, experts on risk and cybersecurity —
              talented people who are dedicated to making financial services
              work for more people and to helping transform lives.
            </p>

            <br />

            <p>
              Chime is committed to building a diverse workforce at both the
              employee and leadership level. We believe Chime&apos;s open and
              supportive culture inspires our employees to do an even better job
              serving members. In 2021 alone, Chime was named to Fortune&apos;s
              list of Best Small & Medium Workplaces, Best Workplaces for
              Millennials, Best Workplaces in Financial Services and People
              Magazine&apos;s Top 100 Companies that Care list.
            </p>
          </Disclosure>
        </ChimeFinancialComponents.Section.Content>
      </ChimeFinancialComponents.Section.Container>
    </>
  );
};

FaqPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default FaqPage;
