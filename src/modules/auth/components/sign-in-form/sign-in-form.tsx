import { zodResolver } from "@hookform/resolvers/zod";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Button } from "~/modules/core/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/modules/core/components/ui/form";
import { Input } from "~/modules/core/components/ui/input";
import { cn } from "~/modules/core/lib/utils";
import { signInSchema } from "../../utils/validation";
import styles from "./styles.module.css";
import { type SignInFormData, type SignInFormProps } from "./types";

const SignInForm = ({ ...props }: SignInFormProps) => {
  const { data: session, status } = useSession();
  const form = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInFormData) => {
    const response = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    console.log(response);
  };

  // console.log(session);

  return (
    <Form {...form}>
      <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
        <Button
          className="rounded-md"
          type="button"
          variant="outline"
          onClick={() => signIn("google")}
        >
          <FcGoogle className="mr-2 h-6 w-6" />
          Sign in with Google
        </Button>
        <hr
          className={`${styles.divider} mb-2 mt-4 overflow-visible bg-primary-light text-center`}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className={cn(
                  form.formState.errors.email ? "text-red-500" : "text-primary",
                  "text-sm font-medium",
                )}
              >
                Email
              </FormLabel>
              <FormControl>
                <Input
                  className={cn(
                    form.formState.errors.email
                      ? "border-red-500 focus-visible:ring-red-500"
                      : "border-primary-light",
                    "rounded-md border bg-white py-2 pl-3 pr-14 focus-visible:ring-offset-0",
                  )}
                  type="text"
                  placeholder="xavier@email.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className={cn(
                  form.formState.errors.password
                    ? "text-red-500"
                    : "text-primary",
                  "text-sm font-medium",
                )}
              >
                Password
              </FormLabel>
              <FormControl>
                <Input
                  className={cn(
                    form.formState.errors.password
                      ? "border-red-500 focus-visible:ring-red-500"
                      : "border-primary-light",
                    "rounded-md border bg-white py-2 pl-3 pr-14 focus-visible:ring-offset-0",
                  )}
                  type="password"
                  placeholder="*****"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium"
          type="submit"
        >
          Log In
        </Button>
        <div className="gap-1.25 flex flex-col items-center">
          <p className="text-base font-normal">
            {"Don't have an account yet?"}
          </p>
          <Link
            className="transform text-base font-medium hover:underline"
            href="/auth/signup"
          >
            Create Account
          </Link>
        </div>
      </form>
    </Form>
  );
};

export { SignInForm };
