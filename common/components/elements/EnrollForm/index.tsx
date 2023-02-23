import * as Styled from "./styled";

import type { ForwardRefRenderFunction, ForwardedRef } from "react";

import { forwardRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

interface FormValues {
  email: string;
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
    setValue,
  } = useForm<FormValues>();

  const { push: navigateTo } = useRouter();

  const onSubmit = (formData: FormValues) => {
    console.log(formData.email);
    navigateTo(`/users/sign-up?email=${formData.email}`);
  };

  useEffect(() => {
    register("email", {
      required: "required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Please correct your email address",
      },
    });
  }, [register]);

  return (
    <Styled.Form onSubmit={handleSubmit(onSubmit)}>
      <Styled.Input
        theme={props.theme ?? "light"}
        type="email"
        placeholder="Enter your email"
        onChange={e => setValue("email", e.target.value)}
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
