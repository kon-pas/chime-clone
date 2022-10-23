import type { NextPage } from "next";
import Head from "next/head";

import { COLORS } from "@constants";

import MonoSection from "@components/sections/MonoSection";
import DualSection from "@components/sections/DualSection";
import BannerSection from "@components/sections/BannerSection";
import ToggleBox from "@components/elements/ToggleBox";
import ContentContainer from "@components/elements/ContentContainer";

const Placeholder: NextPage = () => {
  return (
    <>
      <Head>
        <title>Frequently Asked Questions | How to Get Started with Chime</title>
        <meta name="description" content="Chime Clone Frequently Asked Questions" />
      </Head>

      <ContentContainer>
        <ToggleBox text="abc">
          blah blah
        </ToggleBox>

        <ToggleBox text="abc">
          blah blah
        </ToggleBox>

        <ToggleBox text="abc">
          blah blah
        </ToggleBox>
      </ContentContainer>
    </>
  );
};

export default Placeholder;