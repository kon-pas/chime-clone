import * as LogInComponents from "@components/pages/log-in";

import type { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

import type { NextPageWithLayout } from "@pages/_app";

import ModalLayout from "@components/composition/ModalLayout";

const LogInPage: NextPageWithLayout = () => {
  return (
    <LogInComponents.Container>
      <Link href="/" passHref>
        <a>
          <Image
            src="/static/components/Header/chime-logo.svg"
            alt="Chime Logo"
            width="130px"
            height="39px"
          />
        </a>
      </Link>

      <LogInComponents.Text1>
        By clicking “Log In”, you agree to receive SMS text messages from Chime
        to verify your identity
      </LogInComponents.Text1>

      <LogInComponents.Text2>
        © 2022 Chime. All Rights Reserved.
      </LogInComponents.Text2>

      <LogInComponents.Text3>
        Banking Services provided by The Bancorp Bank or Stride Bank, N.A.,
        Members FDIC. The Chime Visa® Debit Card is issued by The Bancorp Bank
        or Stride Bank pursuant to a license from Visa U.S.A. Inc. and may be
        used everywhere Visa debit cards are accepted. Please see back of your
        Card for its issuing bank.
      </LogInComponents.Text3>
    </LogInComponents.Container>
  );
};

LogInPage.getLayout = (page: ReactElement) => <ModalLayout>{page}</ModalLayout>;

export default LogInPage;
