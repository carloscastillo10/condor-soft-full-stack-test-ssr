import { AuthSection } from "~/modules/auth/components/auth-section";
import { SignUpContainer } from "~/modules/auth/components/sign-up-container";
import { Layout } from "~/modules/core/components/layout";

export default function SignUp() {
  return (
    <>
      <Layout title="SignUp - Condorsoft">
        <main>
          <AuthSection>
            <SignUpContainer />
          </AuthSection>
        </main>
      </Layout>
    </>
  );
}
