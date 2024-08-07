import { AuthSection } from "~/modules/auth/components/auth-section";
import { LoginForm } from "~/modules/auth/components/login-form";
import { Layout } from "~/modules/core/components/layout";

export default function Login() {
  return (
    <>
      <Layout title="Login - Condorsoft">
        <AuthSection>
          <LoginForm />
        </AuthSection>
      </Layout>
    </>
  );
}
