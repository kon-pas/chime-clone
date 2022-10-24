import * as Styled from "@components/pages/404";

import type { ReactElement } from "react";
import type { NextPageWithLayout } from "./_app";
import Image from "next/image";
import { useRouter } from "next/router";

import MainLayout from "@components/composition/MainLayout";

const Page404: NextPageWithLayout = () => {
  const { push: navigate } = useRouter();

  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Styled.TextContainer>
          <Styled.Heading>
            Uh-oh. The page you&apos;re looking for isn&apos;t here!
          </Styled.Heading>

          <Styled.Button onClick={() => navigate("/")}>
            Back to Homepage
          </Styled.Button>
        </Styled.TextContainer>

        <Styled.ImageWrapper>
          <Image
            src="/static/pages/404/404.png"
            alt="404 Robot"
            layout="responsive"
            width={654}
            height={564}
          />
        </Styled.ImageWrapper>
      </Styled.Container>
    </Styled.Wrapper>
  );
};

Page404.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default Page404;
