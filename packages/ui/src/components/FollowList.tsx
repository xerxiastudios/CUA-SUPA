import React from "react";

import { Paragraph, XStack, YStack } from "@my/ui";

export function FollowList() {
  return (
    <YStack p={"$4"} bg={"#16181c"} br={"$6"}>
      <Paragraph color={"white"} fow="800" fontSize={"$5"}>
        Who to follow
      </Paragraph>

      <XStack>
        <YStack></YStack>
      </XStack>
    </YStack>
  );
}
