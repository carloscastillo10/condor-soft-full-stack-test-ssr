import { SessionProvider } from "next-auth/react";
import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";
import { type AppType } from "next/dist/shared/lib/utils";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <SessionProvider>
      <Component {...pageProps} />
      <ProgressBar
        height="4px"
        color="#0F172A"
        shallowRouting
        options={{ showSpinner: false }}
      />
    </SessionProvider>
  );
};

export default MyApp;
