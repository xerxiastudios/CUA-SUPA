import { TamaguiProvider, TamaguiProviderProps } from "@my/ui";

import config from "../tamagui.config";
import SupabaseProvider from "./SupabaseProvider";
import { TRPCProvider } from "./trpc";

export function Provider({
  children,
  ...rest
}: Omit<TamaguiProviderProps, "config">) {
  return (
    <TamaguiProvider
      config={config}
      disableInjectCSS
      defaultTheme="light"
      {...rest}
    >
      <SupabaseProvider>
        <TRPCProvider>{children}</TRPCProvider>
      </SupabaseProvider>
    </TamaguiProvider>
  );
}
