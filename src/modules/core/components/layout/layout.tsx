import { Inter } from "next/font/google";
import { Meta } from "./meta";
import { type LayoutProps } from "./types";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const Layout = ({ title, keywords, description, children }: LayoutProps) => (
  <>
    <Meta title={title} keywords={keywords} description={description} />
    <div className={`${inter.variable} font-sans`}>{children}</div>
  </>
);

export { Layout };
