import * as FaqComponents from "@components/pages/faq";

import type { NextPage } from "next";
import Head from "next/head";

import { COLORS } from "@constants";

import BannerSection from "@components/sections/BannerSection";
import ToggleBox from "@components/elements/ToggleBox";
import ContentContainer from "@components/elements/ContentContainer";

const Placeholder: NextPage = () => {
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
          Banking that has your back<sup>TM</sup>
        </h1>

        <p>
          Get paid up to 2 days early with direct deposit.<sup>1</sup> Say
          goodbye to hidden bank fees<sup>2</sup>. Grow your savings,
          automatically.
        </p>
      </BannerSection>

      {/* 2 */}
      <FaqComponents.Section>
        <ContentContainer>
          <FaqComponents.Heading>
            Frequently Asked Questions
          </FaqComponents.Heading>

          <ToggleBox text="abc">blah blah</ToggleBox>

          <ToggleBox text="abc">blah blah</ToggleBox>

          <ToggleBox text="abc">blah blah</ToggleBox>
        </ContentContainer>
      </FaqComponents.Section>
    </>
  );
};

export default Placeholder;
