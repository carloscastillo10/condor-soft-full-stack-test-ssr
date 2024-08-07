import { Meta } from "./meta";
import { type LayoutProps } from "./types";

const Layout = ({ title, keywords, description, children }: LayoutProps) => (
  <>
    <Meta title={title} keywords={keywords} description={description} />
    <main>{children}</main>
  </>
);

export { Layout };
