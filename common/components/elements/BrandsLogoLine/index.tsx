import * as Styled from "./styled";

import type { FC } from "react";
import Image from "next/image";

const BrandsLogoLine: FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.Item width={82}>
          <Image
            src="/static/components/BrandsLogoLine/WSJ.png"
            alt="WSJ"
            layout="responsive"
            width="82"
            height="46"
          />
        </Styled.Item>

        <Styled.Item width={164}>
          <Image
            src="/static/components/BrandsLogoLine/Forbes.png"
            alt="Forbes"
            layout="responsive"
            width="164"
            height="42"
          />
        </Styled.Item>

        <Styled.Item width={337}>
          <Image
            src="/static/components/BrandsLogoLine/NYT.png"
            alt="NYT"
            layout="responsive"
            width="337"
            height="49"
          />
        </Styled.Item>

        <Styled.Item width={267}>
          <Image
            src="/static/components/BrandsLogoLine/usatoday.png"
            alt="USA Today"
            layout="responsive"
            width="267"
            height="48"
          />
        </Styled.Item>

        <Styled.Item width={82}>
          <Image
            src="/static/components/BrandsLogoLine/TC.png"
            alt="TC"
            layout="responsive"
            width="87"
            height="45"
          />
        </Styled.Item>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

export default BrandsLogoLine;
