import * as LogInComponents from "@components/pages/log-in";

import type { NextPageWithLayout } from "@pages/_app";
import type { Email, Password } from "@types";

import { ReactElement, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { login } from "@services";
import { useUser } from "@hooks";
import ModalLayout from "@components/composition/ModalLayout";

interface FormValues {
  email: Email;
  password: Password;
}

const LogInPage: NextPageWithLayout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const { push: navigate } = useRouter();

  const [user, setUser] = useUser();

  // @@@ This may not be the best solution, but was trying to not Google
  const onSubmit = (loginData: FormValues) => {
    login(
      loginData,
      safeUserData => {
        setUser(safeUserData);
        navigate("/");
      }
      // ,
      // () => console.warn("I failed")
    );
  };

  useEffect(() => {
    if (user) console.info(`Logged in as ${user.username}`);
  }, [user]);

  return (
    <LogInComponents.Container>
      <Head>
        <title>Member Login | Chime</title>
        <meta name="description" content="Chime Clone Member Log In" />
      </Head>

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

      <LogInComponents.Form.Container onSubmit={handleSubmit(onSubmit)}>
        <LogInComponents.Form.Input
          type="email"
          placeholder="Email address"
          {...register("email", {
            required: "required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
        />
        {errors.email && (
          <LogInComponents.Form.Error>
            Please correct your email address
          </LogInComponents.Form.Error>
        )}

        <LogInComponents.Form.Input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "required",
            minLength: {
              value: 5,
              message: "min length is 5",
            },
          })}
        />
        {errors.email && (
          <LogInComponents.Form.Error>
            Please correct your password
          </LogInComponents.Form.Error>
        )}

        <LogInComponents.Form.Submit disabled={isSubmitting} type="submit">
          Login
        </LogInComponents.Form.Submit>
      </LogInComponents.Form.Container>

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
