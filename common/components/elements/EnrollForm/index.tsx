import * as Styled from "./styled";

import type { Email } from "@types";

import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

interface FormValues {
  email: Email;
}

const EnrollForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormValues>();

  const { push: navigateTo } = useRouter();

  const onSubmit = (formData: FormValues) => {
    navigateTo(`/users/sign-up?email=${formData.email}`);
  };

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <Styled.Input
        type="email"
        placeholder="Enter your email"
        {...register("email", {
          required: "required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Please correct your email address",
          },
        })}
      />
      <Styled.Submit disabled={isSubmitting} type="submit">
        Sign Up
      </Styled.Submit>
    </Styled.Form>
  );
};

export default EnrollForm;
