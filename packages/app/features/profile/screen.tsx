import { supabase } from "app/utils/supabase";
import React from "react";
import { useRouter } from "solito/router";

import { Button, Paragraph, YStack } from "@my/ui";

export function ProfileScreen() {
  const { replace } = useRouter();
  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error !== null) {
      console;
      return;
    }

    replace("/signin");
  };

  return (
    <YStack f={1} jc="center" ai="center" space>
      <Paragraph ta="center" fow="800">
        profile
      </Paragraph>

      <Button
        onPress={() => {
          logout();
        }}
      >
        Sign Out
      </Button>
    </YStack>
  );
}
