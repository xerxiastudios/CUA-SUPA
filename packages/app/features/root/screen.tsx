import { supabase } from "app/utils/supabase";
import React, { useEffect, useState } from "react";
import { useRouter } from "solito/router";

import { Paragraph, YStack } from "@my/ui";
import { Session } from "@supabase/supabase-js";

export function RootScreen() {
  const [session, setSession] = useState<Session | null>(null);
  const { replace } = useRouter();
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    if (session) {
      replace("/dashboard");
    } else {
      replace("/signin");
    }
  }, [session]);

  return (
    <YStack f={1} jc="center" ai="center" space>
      <Paragraph ta="center" fow="800">
        Loading
      </Paragraph>
    </YStack>
  );
}
