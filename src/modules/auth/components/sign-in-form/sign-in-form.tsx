import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { GoAlertFill } from "react-icons/go";
import { Alert, AlertTitle } from "~/modules/core/components/ui/alert";
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
  const form = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(signInSchema),
  });
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: SignInFormData) => {
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (response?.error) {
      setError(response.error);
    } else {
      router.push("/reminder");
    }
  };

  // console.log(session);

  return (
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
        {...props}
      >
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
        {error && (
          <Alert className="bg-red-500 text-white">
            <GoAlertFill className="h-5 w-5 fill-white" />
            <AlertTitle className="mb-0 font-medium leading-normal">
              {error}
            </AlertTitle>
          </Alert>
        )}
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
      </form>
    </Form>
  );
};

export { SignInForm };
