import { Page404Components } from "@components/pages";

import type { ReactElement } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import type { NextPageWithLayout } from "@pages/_app";

import { MainLayout } from "@components/composition";

const Page404: NextPageWithLayout = () => {
  const { push: navigate } = useRouter();

  return (
    <Page404Components.Wrapper>
      <Page404Components.Container>
        <Page404Components.TextContainer>
          <Page404Components.Heading>
            Uh-oh. The page you&apos;re looking for isn&apos;t here!
          </Page404Components.Heading>

          <Page404Components.Button onClick={() => navigate("/")}>
            Back to Homepage
          </Page404Components.Button>
        </Page404Components.TextContainer>

        <Page404Components.ImageWrapper>
          <Image
            src="/static/pages/404/404.png"
            alt="404 Robot"
            layout="responsive"
            width={654}
            height={564}
          />
        </Page404Components.ImageWrapper>
      </Page404Components.Container>
    </Page404Components.Wrapper>
  );
};

Page404.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default Page404;
