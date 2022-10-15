import * as Styled from "@styles/pages/404";

import type { NextPage } from "next";
import Image from "next/image";

import ContentContainer from "@components/elements/ContentContainer";

const Page404: NextPage = () => {
  return (
    <Styled.Container>
      <ContentContainer>
        <Styled.TextContainer>
          <Styled.Heading>
            Uh-oh. The page you&apos;re looking for isn&apos;t here!
          </Styled.Heading>

          <Styled.Button>
            Back to Homepage
          </Styled.Button>
        </Styled.TextContainer>

        <Styled.ImageWrapper>
          <Image
            src="https://www.chime.com/wp-content/themes/project-sscms-2022-10-05T17-28-22/images/404.png"
            alt="404 Robot"
            layout="responsive"
            width={654}
            height={564}
          />
        </Styled.ImageWrapper>
      </ContentContainer>
    </Styled.Container>
  );
};

export default Page404;
