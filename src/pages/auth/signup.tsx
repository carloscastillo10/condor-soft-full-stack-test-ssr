import { SignUpSection } from "~/modules/auth/components/sign-up-section";
import { Layout } from "~/modules/core/components/layout";

export default function SignUp() {
  return (
    <>
      <Layout title="SignUp - Condorsoft">
        <SignUpSection />
      </Layout>
    </>
  );
}
