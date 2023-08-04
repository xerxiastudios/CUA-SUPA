import React from "react";

import { Button, Paragraph, YStack } from "@my/ui";

export function GetVerified() {
  return (
    <YStack p={"$4"} bg={"#16181c"} br={"$6"}>
      <Paragraph color={"white"} fow="800" fontSize={"$5"}>
        Get Verified
      </Paragraph>

      <Paragraph color={"white"} fow="500" fontSize={14} mt={-4}>
        Subscribe to unlock new features
      </Paragraph>

      <Button
        width={"$12"}
        mt={"$4"}
        bg={"#1A8CD8"}
        color={"white"}
        fontSize={"$5"}
        fontWeight="600"
        br={"$8"}
      >
        Post
      </Button>
    </YStack>
  );
}
