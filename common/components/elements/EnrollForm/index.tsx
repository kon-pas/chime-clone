import * as Styled from "./styled";

import type { ForwardRefRenderFunction, FC, ForwardedRef } from "react";
import type { Email } from "@types";

import { forwardRef } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

interface FormValues {
  email: Email;
}

interface EntrollFormProps {
  direction?: "rows" | "cols" | "mixed";
  theme?: "light" | "dark";
  label?: string;
}

const EnrollForm: ForwardRefRenderFunction<
  HTMLInputElement,
  EntrollFormProps
> = (props: EntrollFormProps, ref: ForwardedRef<HTMLInputElement>) => {
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
        theme={props.theme ?? "light"}
        type="email"
        placeholder="Enter your email"
        {...register("email", {
          required: "required",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Please correct your email address",
          },
        })}
        ref={ref}
      />
      <Styled.SubmitWrapper direction={props.direction ?? "rows"}>
        <Styled.Submit
          disabled={isSubmitting}
          type="submit"
          theme={props.theme ?? "light"}
        >
          {props.label ?? "Sign Up"}
        </Styled.Submit>
      </Styled.SubmitWrapper>
    </Styled.Form>
  );
};

export default forwardRef(EnrollForm);
