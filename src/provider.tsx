import React from "react";

import type { NavigateOptions } from "react-router-dom";
import { useHref, useNavigate } from "react-router-dom";

import { HeroUIProvider } from "@heroui/system";

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}

export function Provider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      {children}
    </HeroUIProvider>
  );
}
