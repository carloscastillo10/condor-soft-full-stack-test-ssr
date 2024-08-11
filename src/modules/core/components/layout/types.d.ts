import { type ReactNode } from "react";

export type MetadataProps = {
  title?: string;
  keywords?: string;
  description?: string;
};

export type LayoutProps = MetadataProps & {
  children: ReactNode;
};
