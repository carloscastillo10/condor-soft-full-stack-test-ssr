import { QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";
import { type AppType } from "next/dist/shared/lib/utils";
import { Toaster } from "~/modules/core/components/ui/toaster";
import queryClient from "~/modules/core/lib/utils";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ProgressBar
          height="4px"
          color="#FFF"
          shallowRouting
          options={{ showSpinner: false }}
        />
        <Toaster />
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default MyApp;
4;
