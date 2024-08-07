import styles from "./styles.module.css";
import { type AuthSectionProps } from "./types";

const AuthSection = ({ children }: AuthSectionProps) => (
  <section
    className={`${styles.section} flex min-h-screen items-center justify-center px-4`}
  >
    {children}
  </section>
);

export { AuthSection };
