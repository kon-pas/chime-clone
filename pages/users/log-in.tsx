import * as LogInComponents from "@components/pages/log-in";

import type { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

import type { NextPageWithLayout } from "@pages/_app";

import ModalLayout from "@components/composition/ModalLayout";

type FormValues = {
  email: string;
  password: string;
};

const LogInPage: NextPageWithLayout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = (data: any) => console.log(data);

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

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          {...register("email", {
            required: "required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
        />
        {errors.email && <div>Please correct your email address</div>}

        <input
          type="password"
          {...register("password", {
            required: "required",
            minLength: {
              value: 5,
              message: "min length is 5",
            },
          })}
        />
        {errors.password && <div>Please correct your password</div>}

        <button disabled={isSubmitting}>Login</button>
      </form>

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
