import { AuthSection } from "~/modules/auth/components/auth-section";
import { SignInContainer } from "~/modules/auth/components/sign-in-container";
import { Layout } from "~/modules/core/components/layout";

export default function SignIn() {
  return (
    <>
      <Layout title="SignIn - Condorsoft">
        <main>
          <AuthSection>
            <SignInContainer />
          </AuthSection>
        </main>
      </Layout>
    </>
  );
}
