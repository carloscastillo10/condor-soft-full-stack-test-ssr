import { Inter } from "next/font/google";
import { Meta } from "./meta";
import styles from "./styles.module.css";
import { type LayoutProps } from "./types";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const Layout = ({ title, keywords, description, children }: LayoutProps) => (
  <>
    <Meta title={title} keywords={keywords} description={description} />
    <main className={`${styles.main} ${inter.variable} font-sans`}>
      {children}
    </main>
  </>
);

export { Layout };
