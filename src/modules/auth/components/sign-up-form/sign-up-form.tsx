import { LuLoader2 } from "react-icons/lu";
import { AlertError } from "~/modules/core/components/alert-error";
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
import { useSignUp } from "../../hooks/useSignUp";
import { type SignUpFormData } from "../../types";
import { type SignUpFormProps } from "./types";

const SignUpForm = ({ ...props }: SignUpFormProps) => {
  const {
    state: { form, isLoading, error },
    functions: { signUp },
  } = useSignUp();

  const onSubmit = (data: SignUpFormData) => {
    signUp(data);
  };

  return (
    <Form {...form}>
      <form
        className="grid gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
        {...props}
      >
        {/* <Button className="rounded-md" type="button" variant="outline">
          <FcGoogle className="mr-2 h-6 w-6" />
          Sign up with Google
        </Button>
        <hr
          className={`${styles.divider} mb-2 mt-4 overflow-visible bg-primary-light text-center`}
        /> */}
        {error && <AlertError errorMessage={error.message} />}
        <div className="grid grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className={cn(
                    form.formState.errors.name
                      ? "text-red-500"
                      : "text-primary",
                    "text-sm font-medium",
                  )}
                >
                  Name
                </FormLabel>
                <FormControl>
                  <Input
                    className={cn(
                      form.formState.errors.name
                        ? "border-red-500 focus-visible:ring-red-500"
                        : "border-primary-light",
                      "rounded-md border bg-white py-2 pl-3 pr-14 focus-visible:ring-offset-0",
                    )}
                    type="text"
                    placeholder="Xavier"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel
                  className={cn(
                    form.formState.errors.lastName
                      ? "text-red-500"
                      : "text-primary",
                    "text-sm font-medium",
                  )}
                >
                  Last Name
                </FormLabel>
                <FormControl>
                  <Input
                    className={cn(
                      form.formState.errors.lastName
                        ? "border-red-500 focus-visible:ring-red-500"
                        : "border-primary-light",
                      "rounded-md border bg-white py-2 pl-3 pr-14 focus-visible:ring-offset-0",
                    )}
                    type="text"
                    placeholder="Smith"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                className={cn(
                  form.formState.errors.confirmPassword
                    ? "text-red-500"
                    : "text-primary",
                  "text-sm font-medium",
                )}
              >
                Confirm Password
              </FormLabel>
              <FormControl>
                <Input
                  className={cn(
                    form.formState.errors.confirmPassword
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
          disabled={isLoading}
        >
          {isLoading ? (
            <LuLoader2 className="h-6 w-6 animate-spin" />
          ) : (
            "Create Account"
          )}
        </Button>
      </form>
    </Form>
  );
};

export { SignUpForm };
