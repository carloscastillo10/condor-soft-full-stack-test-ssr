import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { type ErrorResponse } from "~/modules/core/types";
import { type SignUpFormData } from "../types";
import { signUpSchema } from "../utils/validation";

const useSignUp = () => {
  const form = useForm<SignUpFormData>({
    defaultValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(signUpSchema),
  });

  const router = useRouter();

  const signUp = async (data: SignUpFormData) => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data }),
    });

    if (!response.ok) {
      const { message } = (await response.json()) as ErrorResponse;
      throw new Error(message);
    }

    await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    router.push("/");
  };

  const { mutate, status, error } = useMutation({
    mutationFn: signUp,
  });

  return {
    form,
    isLoading: status === "pending",
    error,
    signUp: mutate,
  };
};

export { useSignUp };
