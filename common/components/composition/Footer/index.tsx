import * as S from "./styled";

import Image from "next/image";

import { NAVIGATION_ITEMS, BREAKPOINTS } from "@constants";

import ContentContainer from "@components/elements/ContentContainer";

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <ContentContainer>
        <S.TopSection>
          <S.MenuSection>
            {NAVIGATION_ITEMS.map((item, idx) => (
              <li key={idx}>
                <span>{item.label}</span>

                <menu>
                  {item.subitems.map((item, idx) => (
                    <li key={idx}>{item.label}</li>
                  ))}
                </menu>
              </li>
            ))}
          </S.MenuSection>

          <S.HorizontalLine hideAt={BREAKPOINTS.LG}/>

          <S.SocialSection>
            <a href="https://apps.apple.com/us/app/chime-banking/id836215269">
              <Image
                src="https://www.chime.com/wp-content/themes/project-sscms-2022-09-29T19-35-23/images/footer/app-store.png"
                alt="Chime App Store Download"
                width="170px"
                height="40px"
              />
            </a>

            <a href="https://play.google.com/store/apps/details?id=com.onedebit.chime&hl=en">
              <Image
                src="https://www.chime.com/wp-content/themes/project-sscms-2022-09-29T19-35-23/images/footer/google-play.png"
                alt="Chime Google Play Download"
                width="170px"
                height="40px"
              />
            </a>

            <div>
              <a href="https://www.facebook.com/chime">
                <Image
                  src="https://www.chime.com/wp-content/themes/project-sscms-2022-09-29T19-35-23/images/footer/facebook-bw.png"
                  alt="Chime Facebook"
                  width="32px"
                  height="32px"
                />
              </a>
            </div>

            <div>
              <a href="https://twitter.com/chime">
                <Image
                  src="https://www.chime.com/wp-content/themes/project-sscms-2022-09-29T19-35-23/images/footer/twitter-bw.png"
                  alt="Chime Twitter"
                  width="32px"
                  height="32px"
                />
              </a>
            </div>

            <div>
              <a href="https://www.instagram.com/Chime/">
                <Image
                  src="https://www.chime.com/wp-content/themes/project-sscms-2022-09-29T19-35-23/images/footer/instagram-bw.png"
                  alt="Chime Instagram"
                  width="32px"
                  height="32px"
                />
              </a>
            </div>
          </S.SocialSection>
        </S.TopSection>

        <S.HorizontalLine />

        <S.DisclaimerSection>
          <p>
            Banking services provided by The Bancorp Bank or Stride Bank, N.A.,
            Members FDIC. The Chime Visa® Debit Card is issued by The Bancorp Bank
            or Stride Bank pursuant to a license from Visa U.S.A. Inc. and may be
            used everywhere Visa debit cards are accepted. The Chime Visa® Credit
            Builder Card is issued by Stride Bank pursuant to a license from Visa
            U.S.A. Inc. and may be used everywhere Visa credit cards are accepted.
            Please see back of your Card for its issuing bank.
          </p>
          <p>
            While Chime doesn&apos;t issue personal checkbooks to write checks,
            Chime Checkbook gives you the freedom to send checks to anyone,
            anytime, from anywhere. See your issuing bank&apos;s Deposit Account
            Agreement for full Chime Checkbook details.
          </p>
          <p>
            By clicking on some of the links above, you will leave the Chime
            website and be directed to a third-party website. The privacy
            practices of those third parties may differ from those of Chime. We
            recommend you review the privacy statements of those third party
            websites, as Chime is not responsible for those third parties&apos;
            privacy or security practices.
          </p>
          <p>
            #1 Most Loved Banking App Source: Chime received the highest 2021 Net
            Promoter Score among competitors in the industry according to
            Qualtrics®. Chime was the 2021 #1 most downloaded banking app in the
            US according to Apptopia®.
          </p>
          <p>
            <sup>1</sup> Chime SpotMe is an optional, no fee service that requires
            a single deposit of $200 or more in qualifying direct deposits to the
            Chime Checking Account each month and Visa debit card activation. All
            qualifying members will be allowed to overdraw their account up to $20
            on debit card purchases and cash withdrawals initially, but may be
            later eligible for a higher limit of up to $200 or more based on
            member&apos;s Chime Account history, direct deposit frequency and
            amount, spending activity and other risk-based factors. Your limit
            will be displayed to you within the Chime mobile app. You will receive
            notice of any changes to your limit. Your limit may change at any
            time, at Chime&apos;s discretion. Although there are no overdraft
            fees, there may be out-of-network or third party fees associated with
            ATM transactions. SpotMe won&apos;t cover non-debit card transactions,
            including ACH transfers, Pay Anyone transfers, or Chime Checkbook
            transactions. See terms and conditions.
          </p>
          <p>
            <sup>2</sup> Early access to direct deposit funds depends on the
            timing of the submission of the payment file from the payer. We
            generally make these funds available on the day the payment file is
            received, which may be up to 2 days earlier than the scheduled payment
            date.
          </p>
          <p>
            <sup>3</sup> Out-of-network ATM withdrawal fees apply except at
            MoneyPass ATMs in a 7-Eleven location or any Allpoint or Visa Plus
            Alliance ATM. Other fees such as third-party and cash deposit fees may
            apply.
          </p>
          <p>
            <sup>4</sup> Based on a representative study conducted by Experian®,
            members who made their first purchase with Credit Builder between June
            2020 and October 2020 observed an average FICO® Score 8 increase of 30
            points after approximately 8 months. On-time payment history can have
            a positive impact on your credit score. Late payment may negatively
            impact your credit score.
          </p>
          <p>
            <sup>5</sup> To be eligible to apply for Credit Builder, you need to
            have received a qualifying direct deposit of $200 or more to your
            Spending Account within the last 365 days of your application. The
            qualifying direct deposit must have been made by your employer,
            payroll provider, or benefits payer by Automated Clearing House (ACH)
            deposit. Bank ACH transfers, Pay Friends transfers, verification or
            trial deposits from financial institutions, peer to peer transfers
            from services such as PayPal, Cash App, or Venmo, mobile check
            deposits, and cash loads or deposits are not qualifying direct
            deposits.
          </p>
          <p>
            <sup>6</sup> Sometimes instant transfers can be delayed. The recipient
            must use a valid debit card to claim funds. Once you are approved for
            a Chime Checking Account, see your issuing bank&apos;s Deposit Account
            Agreement for full Pay Anyone Transfers details. Please see the back
            of your Chime debit card for your issuing bank. See Terms and
            Conditions
          </p>
          <p>
            <sup>7</sup> The Annual Percentage Yield (&quot;APY&quot;) for the
            Chime Savings Account is variable and may change at any time. The
            disclosed APY is accurate as of August 25th, 2022. No minimum balance
            required. Must have $0.01 in savings to earn interest.
          </p>
          <p>
            Licenses
            <br />
            Chime Capital, LLC, Nationwide Multistate Licensing System
            (&quot;NMLS&quot;) ID 2316451
          </p>
          <p>© 2013-2022 Chime. All Rights Reserved.</p>
        </S.DisclaimerSection>
      </ContentContainer>
    </S.Footer>
  );
};

export default Footer;
