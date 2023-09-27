import { type AppType } from "next/app";

import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { api } from "@/utils/api";
import { Toaster } from "@/ui-lib/components/toaster";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Component {...pageProps} />
      <Toaster />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
