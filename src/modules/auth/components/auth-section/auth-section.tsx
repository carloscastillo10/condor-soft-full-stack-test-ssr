import styles from "./styles.module.css";
import { type AuthSectionProps } from "./types";

const AuthSection = ({ children }: AuthSectionProps) => (
  <section
    className={`${styles.sectionImg} flex min-h-screen items-center justify-center`}
  >
    {children}
  </section>
);

export { AuthSection };
