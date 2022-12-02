import * as SignUpComponents from "@components/pages/sing-up";

import type { NextPageWithLayout } from "@pages/_app";
import type { FirstName, SecondName, Email, Password } from "@types";

import { ReactElement, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import { registerUser } from "@services";
import ModalLayout from "@components/composition/ModalLayout";

interface FormValues {
  firstName: FirstName;
  secondName: SecondName;
  email: Email;
  password: Password;
}

const SignUpPage: NextPageWithLayout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const { push: navigate } = useRouter();

  const onSubmit = (registerData: FormValues) => {
    registerUser(
      registerData,
      () => {
        console.info("User created", registerData);
        navigate("/users/log-in");
      },
      () => {
        console.warn("User creation failed!");
      }
    );
  };

  return (
    <SignUpComponents.Container>
      <Head>
        <title>Apply Today | Chime</title>
        <meta name="description" content="Chime Clone Sign Up" />
      </Head>

      <SignUpComponents.Logo>
        <Link href="/" passHref>
          <Image
            src="/static/components/Header/chime-logo.svg"
            alt="Chime Logo"
            width="130px"
            height="39px"
          />
        </Link>
      </SignUpComponents.Logo>

      <SignUpComponents.Heading>
        Hi, what&apos;s your name?
      </SignUpComponents.Heading>

      <SignUpComponents.Text1>
        Let&apos;s start with some basic information.
      </SignUpComponents.Text1>

      <SignUpComponents.Form.Container onSubmit={handleSubmit(onSubmit)}>
        <SignUpComponents.Form.Splitter>
          {/* First name */}
          <SignUpComponents.Form.Input
            type="firstName"
            placeholder="First name"
            {...register("firstName", {
              required: "required",
              minLength: {
                value: 2,
                message: "Minimum length is 2",
              },
            })}
          />

          {/* Second name */}
          <SignUpComponents.Form.Input
            type="secondName"
            placeholder="First name"
            {...register("secondName", {
              required: "required",
              minLength: {
                value: 2,
                message: "Minimum length is 2",
              },
            })}
          />
        </SignUpComponents.Form.Splitter>

        {(errors.firstName || errors.secondName) && (
          <SignUpComponents.Form.Splitter>
            {errors.firstName && (
              <SignUpComponents.Form.Error>
                Please correct your first name
              </SignUpComponents.Form.Error>
            )}
            {errors.secondName && (
              <SignUpComponents.Form.Error>
                Please correct your second name
              </SignUpComponents.Form.Error>
            )}
          </SignUpComponents.Form.Splitter>
        )}

        {/* Email */}
        <SignUpComponents.Form.Input
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
          <SignUpComponents.Form.Error>
            Please correct your email address
          </SignUpComponents.Form.Error>
        )}

        {/* Password */}
        <SignUpComponents.Form.Input
          type="password"
          placeholder="Password"
          {...register("password", {
            required: "required",
            minLength: {
              value: 5,
              message: "Minimum length is 5",
            },
          })}
        />
        {errors.password && (
          <SignUpComponents.Form.Error>
            Please correct your password
          </SignUpComponents.Form.Error>
        )}

        {/* Submit */}
        <SignUpComponents.Form.Submit disabled={isSubmitting} type="submit">
          Sign Up
        </SignUpComponents.Form.Submit>
      </SignUpComponents.Form.Container>

      <SignUpComponents.Text2>
        You can change your preffered name later in your profile.
      </SignUpComponents.Text2>

      <SignUpComponents.Anchor>
        Already have an account?
      </SignUpComponents.Anchor>

      <SignUpComponents.Disclaimer.Container>
        <SignUpComponents.Disclaimer.Item>
          By applying for a Chime Checking Account, you are providing your
          contact information to The Bancorp Bank or Stride Bank N.A. and Chime
          for their own separate uses, including marketing. Please review The
          Bancorp Bank&apos;s Privacy Policy, Stride Bank N.A. Privacy Policy,
          and Chime&apos;s Privacy Policy.
        </SignUpComponents.Disclaimer.Item>

        <SignUpComponents.Disclaimer.Item>
          IMPORTANT INFORMATION ABOUT PROCEDURES FOR OPENING A NEW ACCOUNT: To
          help the government fight the funding of terrorism and money
          laundering activities, federal law requires all financial institutions
          to obtain, verify, and record information that identifies each person
          who opens an Account. What this means for you: When you open an
          Account, we will ask for your name, address, date of birth, and other
          information that will allow us to identify you. We may also ask to see
          a copy of your driver&apos;s license or other identifying documents.
        </SignUpComponents.Disclaimer.Item>

        <SignUpComponents.Disclaimer.Item>
          © 2022 Chime. All Rights Reserved.
        </SignUpComponents.Disclaimer.Item>

        <SignUpComponents.Disclaimer.Item>
          Banking Services provided by The Bancorp Bank or Stride Bank, N.A.,
          Members FDIC. The Chime Visa® Debit Card is issued by The Bancorp Bank
          or Stride Bank, N.A. pursuant to a license from Visa U.S.A. Inc. and
          may be used everywhere Visa debit cards are accepted.
        </SignUpComponents.Disclaimer.Item>
      </SignUpComponents.Disclaimer.Container>
    </SignUpComponents.Container>
  );
};

SignUpPage.getLayout = (page: ReactElement) => (
  <ModalLayout width={90}>{page}</ModalLayout>
);

export default SignUpPage;
