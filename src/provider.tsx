import React from "react";

import type { NavigateOptions } from "react-router-dom";
import { useHref, useNavigate } from "react-router-dom";

import { HeroUIProvider } from "@heroui/system";

import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority:
    "https://cognito-idp.ap-southeast-2.amazonaws.com/ap-southeast-2_fzgnfxdd0",
  client_id: "24g10rpqealou5alnfgpgplq50",
  redirect_uri: "http://localhost:3000/callback",
  response_type: "code",
  scope: "email openid profile",
};

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}

export function Provider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <AuthProvider {...cognitoAuthConfig}>{children}</AuthProvider>
    </HeroUIProvider>
  );
}
