import Head from "next/head";
import { type MetadataProps } from "./types";

const Meta = ({ title, keywords, description }: MetadataProps) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <meta name="keywords" content={keywords} />
    <title>{title}</title>
    <meta name="title" property="og:title" content={title} />
    <meta name="description" property="og:description" content={description} />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

Meta.defaultProps = {
  title: "Condorsoft: Full Stack SSR/SR Technical Test",
  keywords:
    "full stack, technical test, prisma, postgresql, cron jobs, websockets",
  description:
    "Development of the technical test for the implementation of full stack in Condorsoft",
};

export { Meta };
