import React from "react";

import { Button, Paragraph, XStack, YStack } from "@my/ui";
import { Home } from "@tamagui/lucide-icons";

export function DashboardScreen() {
  return (
    <YStack bg={"$blackA2"}>
      <YStack w={"$14"}>
        <XStack p={"$2"} bg={"$blue10"} jc={"center"}>
          <Home />
          <Paragraph ml={"$2"} col={"$"}>
            Home
          </Paragraph>
        </XStack>
      </YStack>
    </YStack>
  );
}
