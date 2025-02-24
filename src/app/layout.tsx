import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import { RouteTrackProvider } from "@/components/providers/route-track-provider";
import { BodyLockProvider } from "@/components/providers/body-lock-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import { SetupUsername } from "@/components/profile/configuration/setup-username";
import { getServerAuthSession } from "@/server/auth";
import { SessionProvider } from "@/components/providers/session-provider";

import { fetcher } from "@/utils/fetcher";
import { SWRConfigWrapper } from "@/components/providers/swr-config-wrapper";

export const metadata: Metadata = {
  title: "FakeBackend",
  description: "Create your backend with AI",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const session = await getServerAuthSession();

  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TRPCReactProvider>
          <SWRConfigWrapper>
            <SessionProvider session={session}>
              <RouteTrackProvider>
                <BodyLockProvider>
                  <ModalProvider>
                    <SetupUsername session={session} />
                    {children}
                  </ModalProvider>
                </BodyLockProvider>
              </RouteTrackProvider>
            </SessionProvider>
          </SWRConfigWrapper>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
