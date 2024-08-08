import { SignInSection } from "~/modules/auth/components/sign-in-section";
import { Layout } from "~/modules/core/components/layout";

export default function SignIn() {
  return (
    <>
      <Layout title="SignIn - Condorsoft">
        <SignInSection />
      </Layout>
    </>
  );
}
